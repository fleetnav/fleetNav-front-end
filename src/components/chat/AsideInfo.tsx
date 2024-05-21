"use client";
import type { User } from "@/interfaces";
import { ChatService } from "@/services";
import { useChatStore } from "@/store";
import { Button, Input, Image } from "@nextui-org/react";

interface Props {
    user: User;
}
export const AsideInfo = ({ user }: Props) => {
    const setChatData = useChatStore((state) => state.setChatData);
    const chatService = new ChatService(user);
    const users = useChatStore((state) => state.users);
    const selectUser = useChatStore((state) => state.selectUser);

    const handleSelectUser = async (userId: string) => {
        const chatData = await chatService.fetchAndDisplayUserChat(userId);
        setChatData(chatData);
        selectUser(userId);
    };

    return (
        <aside className="flex  flex-col gap-6 w-1/4 rounded-lg p-8 border h-full min-h-full ">
            {/* top inbox  */}
            <div className=" border-b flex justify-between w-full h-[10%]">
                <h3 className="text-2xl">inbox</h3>

                <span className="icon-[solar--chat-round-unread-broken] text-4xl" role="img" aria-hidden="true" />
            </div>
            <div className="flex flex-col overflow-y-scroll gap-4 w-full h-[80%]">
                {users?.map((user) => (
                    <Button
                        key={user.fullName}
                        size="lg"
                        radius="sm"
                        className=" w-full h-20 flex justify-start items-center gap-4 p-8 bg-white/10"
                        onClick={() => handleSelectUser(user.fullName)}
                    >
                        <Image
                            alt="profile"
                            width={100}
                            height={100}
                            radius="full"
                            classNames={{
                                wrapper: "rounded-full",
                            }}
                            src="/images/avatars/avatar-1.jpg"
                        />

                        <h1 className="truncate w-full">{user.nickName}</h1>
                    </Button>
                ))}
            </div>
        </aside>
    );
};
