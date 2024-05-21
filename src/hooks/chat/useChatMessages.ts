import { User } from "@/interfaces";
import { useChatStore } from "@/store";
import { useEffect, useRef, useState } from "react";

export const useChatMessages = (user: User) => {
    const [content, setContent] = useState("");

    const chatData = useChatStore((state) => state.chatData);
    const selectedUser = useChatStore((state) => state.selectedUserId);
    const messages = useChatStore((state) => state.messages);
    const sendMessage = useChatStore((state) => state.sendMessage);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatData, messages]);

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        sendMessage(selectedUser!, content, user);

        setContent("");
    };

    return {
        chatData,
        selectedUser,
        messages,
        handleSendMessage,
        setContent,
        content,
        messagesEndRef,
    };
};
