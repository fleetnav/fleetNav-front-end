export interface UserChat {
    nickName: string;
    fullName: string;
    status: "ONLINE" | "OFFLINE";
}

export interface ChatData {
    chatId: string;
    content: string;
    id: string;
    recipientId: string;
    senderId: string;
    timestamp: string;
}
