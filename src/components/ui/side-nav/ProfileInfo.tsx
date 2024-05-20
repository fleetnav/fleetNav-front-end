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
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
            />

            <div>
                <h3 className={`font-semibold text-3xl ${titleFont.className}`}>{user?.name}</h3>
                <span className="text-slate-300 font-semibold">{user?.email}</span>
            </div>
        </div>
    );
};
