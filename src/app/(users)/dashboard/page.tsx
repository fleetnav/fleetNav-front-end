"use client";
import { Tables } from "@/components/dashboard/Tables";
import { useAuthStore } from "@/store";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function DashboardPage() {
    const [copyCode, setCopyCode] = useState("");
    const user = useAuthStore((state) => state.user);

    const url = `https://fleet-nav-front-end.vercel.app/sign-up?referralCode=${user?._id}`;

    const handleCopy = () => {
        navigator.clipboard
            .writeText(url)
            .then(() => {
                toast.success("Copied to clipboard");
            })
            .catch((err) => {
                toast.error("Error copying to clipboard");
            });
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full h-full">
            <div className="w-full h-28 flex items-center justify-center gap-4">
                <div className="flex bg-white/10 border justify-center items-center h-full border-[#3FA9F5] w-full  gap-4">
                    <span className=" text-3xl   p-4 rounded">Total trips</span>
                    <span className="bg-[#4067EC] text-4xl p-4 corners ">$178</span>
                </div>

                <div className="w-full border h-full  gap-4 flex justify-center items-center border-[#3FA9F5] bg-white/10 rounded">
                    <span className="text-3xl">Total earnings</span>
                    <span className="bg-[#4067EC] text-4xl p-4 corners ">$178k</span>
                </div>
            </div>

            <div className="flex w-full gap-16">
                <div className=" flex flex-col items-center justify-center gap-4">
                    <Tables />
                    <Tables />
                </div>

                <div className="h-[70vh] gap-4 flex flex-col items-center justify-center ">
                    <Tables />
                    <Tables />
                    <Tables />
                </div>

                <div>
                    <div className="h-[70vh] gap-4 flex flex-col items-center justify-center ">
                        <Tables />
                        <Tables />
                        <Tables />
                    </div>
                </div>
            </div>
            {user?._id && (
                <Button onClick={handleCopy} color="primary" size="lg" radius="sm" className=" h-28 text-black ">
                    copy referral code
                </Button>
            )}
        </div>
    );
}
