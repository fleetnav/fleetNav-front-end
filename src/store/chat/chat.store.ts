import { ChatData, User, UserChat } from "@/interfaces";
import { ChatService } from "@/services";
import { Client } from "@stomp/stompjs";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ChatState {
    chatData: ChatData[] | null;
    client: Client | null;
    nickname: string | null;
    fullname: string | null;
    selectedUserId: string | null;
    messages: { [key: string]: string[] };
    users: { nickName: string; fullName: string }[];
    setChatData: (data: []) => void;
    connect: (nickName: string, fullName: string, user: User) => Promise<void>;
    disconnect: () => void;
    sendMessage: (recipientId: string, content: string, User: User) => void;
    receiveMessage: (senderId: string, content: string, user: User) => void;
    setUsers: (users: { nickName: string; fullName: string }[]) => void;
    selectUser: (userId: string) => void;
}

const store: StateCreator<ChatState> = (set, get) => ({
    chatData: null,
    client: null,
    nickname: null,
    fullname: null,
    selectedUserId: null,
    messages: {},
    users: [],
    connect: async (name: string, email: string, user: User) => {
        const chatService = new ChatService(user);

        const client = new Client({
            brokerURL: process.env.NEXT_PUBLIC_SOCKET_SERVICE_URL,
            debug: (str) => console.log(str),
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: async () => {
                client.subscribe(`/user/${name}/queue/messages`, (message) => {
                    const { senderId, content } = JSON.parse(message.body);
                    get().receiveMessage(senderId, content, user);
                });

                client.subscribe(`/user/public`, (message) => {
                    const { senderId, content } = JSON.parse(message.body);
                    get().receiveMessage(senderId, content, user);
                });

                client.publish({
                    destination: "/app/user.addUser",
                    body: JSON.stringify({ nickName: email, fullName: name, status: "ONLINE" }),
                });
                chatService.findAndDisplayConnectedUsers(get().setUsers).then();
            },
            onStompError: () => {
                console.error("Error connecting to WebSocket");
            },
        });

        client.activate();
        set({ client, nickname: user.email, fullname: user.name });
    },
    disconnect: () => {
        const { client, nickname, fullname } = get();
        if (client) {
            client.publish({
                destination: "/app/user.disconnectUser",
                body: JSON.stringify({ nickName: nickname, fullName: fullname, status: "OFFLINE" }),
            });
            client.deactivate();
        }
        set({ client: null, nickname: null, fullname: null, selectedUserId: null, messages: {}, users: [] });
    },
    sendMessage: (recipientId, content, user) => {
        const { client, nickname } = get();
        if (client && nickname) {
            const chatMessage = {
                senderId: nickname,
                recipientId,
                content,
                timestamp: new Date(),
            };
            client.publish({ destination: "/app/chat", body: JSON.stringify(chatMessage) });
            get().receiveMessage(nickname, content, user);
        }
    },
    receiveMessage: async (senderId, content, user) => {
        const chatService = new ChatService(user);
        await chatService.findAndDisplayConnectedUsers(get().setUsers);
        const prvContent = get()?.messages[senderId];

        if (prvContent && content === prvContent[prvContent.length - 1]) {
            return;
        }
        if (content !== undefined) {
            set((state) => ({
                messages: {
                    ...state.messages,
                    [senderId]: [...(state.messages[senderId] || []), content],
                },
            }));
        }
    },
    setUsers: (users) => set({ users }),
    selectUser: (userId) => set({ selectedUserId: userId }),
    setChatData: (data: []) => set({ chatData: data }),
});

export const useChatStore = create<ChatState>()(devtools(immer(store)));
