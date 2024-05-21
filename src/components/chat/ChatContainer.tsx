"use client";
import { useChatMessages } from "@/hooks";
import { ChatData, User } from "@/interfaces";
import { useChatStore } from "@/store";
import { Button, Image, Input } from "@nextui-org/react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface Props {
    user: User;
}
export const ChatContainer = ({ user }: Props) => {
    const { chatData, selectedUser, messages, handleSendMessage, setContent, content, messagesEndRef } =
        useChatMessages(user);
    return (
        <section className="w-full border p-8 gap-4 rounded-lg flex flex-col  h-full">
            {selectedUser ? (
                <>
                    {/* top section */}
                    <div className="relative flex justify-start items-center px-16 gap-4">
                        <div className="relative flex justify-start items-center gap-4  ">
                            <Image
                                width={100}
                                height={100}
                                alt="profile"
                                // radius="full"
                                classNames={{ img: "rounded-full size-[80px] object-cover", wrapper: "rounded-full" }}
                                src="/images/avatars/avatar-1.jpg"
                            />
                            <h3 className="font-bold text-3xl">{selectedUser}</h3>
                        </div>
                    </div>

                    {/* messages and form container  */}
                    <div className="h-[80%]  flex flex-col w-full justify-center p-4  items-center rounded-lg border  bg-white/10">
                        {/* messages */}
                        <div
                            ref={messagesEndRef}
                            className="flex  overflow-y-scroll flex-col min-h-[80%] w-full  gap-4 items-center   p-4  "
                        >
                            {chatData &&
                                chatData.map((chatData: ChatData) => (
                                    <div
                                        key={chatData.id}
                                        className={clsx("flex w-full  gap-4", {
                                            "justify-start": chatData.recipientId === selectedUser,
                                            "justify-end": chatData.senderId === user.email,
                                        })}
                                    >
                                        <div
                                            className={clsx(" bg-[#002047] max-w-[40%] rounded-lg p-4", {
                                                "bg-white text-black": chatData.recipientId === selectedUser,
                                                "": chatData.senderId === user.email,
                                            })}
                                        >
                                            {chatData.content}
                                        </div>
                                    </div>
                                ))}

                            {messages &&
                                messages[selectedUser]?.map((message: string) => (
                                    <div key={message} className="flex w-full justify-start gap-4">
                                        <div className="bg-[#002047] max-w-[40%] rounded-lg p-4 ">{message}</div>
                                    </div>
                                ))}

                            {messages &&
                                messages[user.email]?.map((message: string) => (
                                    <div key={message} className="flex w-full justify-end gap-4">
                                        <div className="bg-white text-black max-w-[40%] rounded-lg p-4 ">{message}</div>
                                    </div>
                                ))}
                        </div>

                        {/* form */}
                        <form onSubmit={handleSendMessage} className="w-[80%] flex  gap-8 m-auto h-[10%] bg ">
                            <Input
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                                className="rounded-lg"
                                size="lg"
                                variant="faded"
                                placeholder="write message"
                            />

                            <Button size="lg" type="submit" variant="faded">
                                <span className="icon-[bi--send] text2xl" role="img" aria-hidden="true" />
                            </Button>
                        </form>
                    </div>
                </>
            ) : (
                <section className="text-3xl m-auto">Select user for chat!</section>
            )}
        </section>
    );
};
