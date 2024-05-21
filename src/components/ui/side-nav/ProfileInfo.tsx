"use client";
import { titleFont } from "@/config";
import { User } from "@/interfaces";
import { useAuthStore } from "@/store";
import Image from "next/image";
// import { Avatar, Image } from "@nextui-org/react";

interface Props {
    user: User | undefined;
}

export const ProfileInfo = ({ user }: Props) => {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-8">
            <Image
                width={100}
                height={100}
                className="rounded-full size-32 object-cover"
                src={`/images/avatars/avatar-${user?.avatarNumber}.jpg`}
                alt="profile"
            />

            <div>
                <h3 className={`font-semibold text-3xl ${titleFont.className}`}>{user?.name}</h3>
                <span className="text-slate-300 font-semibold">{user?.email}</span>
            </div>
        </div>
    );
};
