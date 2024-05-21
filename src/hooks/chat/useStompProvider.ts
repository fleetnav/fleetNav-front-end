"use client";
import { useEffect, useMemo, useState } from "react";
import { Client } from "@stomp/stompjs";
import { useAuthStore, useChatStore } from "@/store";
import { ChatService } from "@/services";
import { User } from "@/interfaces";

export const useStompProvider = (user: User) => {
    const users = useChatStore((state) => state.users);
    const connect = useChatStore((state) => state.connect);
    const chatService = new ChatService(user);
    const messages = useChatStore((state) => state.messages);

    const [stompClient, setStompClient] = useState<Client | null>(null);

    useEffect(() => {
        if (user) {
            connect(user.email, user.name, user).then();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        stompClient,
        users,
    };
};
