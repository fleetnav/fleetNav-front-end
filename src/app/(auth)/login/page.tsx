import Image from "next/image";
import { titleFont } from "../../../config/fonts";
import { FormLogin } from "@/components";

export default function LoginPage() {
    return (
        <section className="h-dvh w-dvw flex">
            <div className=" relative w-1/2 h-full">
                <Image src={"/images/auth/login-photo.jpg"} className="object-cover" fill alt="register image" />

                <div className="h-full absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-primary-blue/60 to-transparent">
                    {" "}
                </div>
            </div>

            <section className="w-1/2 h-full gap-8 flex flex-col justify-center items-center">
                <div className=" flex flex-col justify-center items-center">
                    <h1 className={(titleFont.className, "text-6xl")}>Login</h1>
                </div>

                <FormLogin />
            </section>
        </section>
    );
}
