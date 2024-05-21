import { Tables } from "@/components/dashboard/Tables";
import Image from "next/image";

export default function DashboardPage() {
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
        </div>
    );
}
