"use client";
import { useStompProvider } from "@/hooks/chat/useStompProvider";
import { AsideInfo } from "./AsideInfo";
import { ChatContainer } from "./ChatContainer";
import { User } from "@/interfaces";
interface Props {
    user: User;
}
export const ChatsPage = ({ user }: Props) => {
    const { stompClient } = useStompProvider(user);
    return (
        <div className="w-full border p-8 gap-4 rounded-lg flex  h-full">
            <AsideInfo user={user} />
            <ChatContainer user={user} />
        </div>
    );
};
