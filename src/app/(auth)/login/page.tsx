import Image from "next/image";
import { Input } from "@nextui-org/react";
import { titleFont } from "../../../config/fonts";

export default function LoginPage() {
    return (
        <section className="h-dvh w-dvw flex">
            <div className=" relative w-1/2 h-full">
                <Image src={"/images/auth/login.png"} fill alt="register image" />
            </div>

            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <h1 className={(titleFont.className, "text-6xl")}>Login</h1>

                <form action="">
                    <Input type="email" label="Email" />
                    <Input type="email" label="Email" placeholder="Enter your email" />
                </form>
            </div>

            <div></div>
        </section>
    );
}
