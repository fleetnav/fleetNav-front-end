import { User, UserChat } from "@/interfaces";
import { instaceChat } from "@/lib";
import { Client } from "@stomp/stompjs";

export class ChatService {
    private user;

    constructor(user: User) {
        this.user = user;
    }

    async findAndDisplayConnectedUsers(setUsers: (users: { fullName: string; nickName: string }[]) => void) {
        try {
            const { data } = await instaceChat.get<UserChat[]>("/users");

            const cloned = [...data];

            const connectedUsers = cloned.filter((userSocket: UserChat) => userSocket.fullName !== this.user.email);

            setUsers(connectedUsers);

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error while fetching connected users");
        }
    }

    // async onMessageReceived(payload: any) {
    //     console.log(payload);
    //     await this.findAndDisplayConnectedUsers();
    //     console.log("Message received", payload);
    //     const message = JSON.parse(payload.body);
    // }

    async fetchAndDisplayUserChat(name: string) {
        try {
            const { data } = await instaceChat.get(`/messages/${this.user.email}/${name}`);
            console.log(data);
            return data;
        } catch (error) {
            throw new Error("Error while fetching user chat");
        }

        // chatArea.innerHTML = "";
        // userChat.forEach((chat) => {
        //     displayMessage(chat.senderId, chat.content);
        // });
        // chatArea.scrollTop = chatArea.scrollHeight;
    }

    onLogout(stompClient: Client) {
        stompClient.publish({
            destination: " /app/user.disconnectUser",
            body: JSON.stringify({ nickName: this.user.name, fullName: this.user.email, status: "OFFLINE" }),
        });
    }
}
