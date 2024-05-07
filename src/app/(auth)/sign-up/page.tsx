import { FormRegister } from "@/components";
import { titleFont } from "@/config";

import Image from "next/image";

export default function SignUpPage() {
    return (
        <div>
            <section className="h-dvh w-dvw flex">
                <div className=" relative w-1/2 h-full">
                    <Image src={"/images/auth/register.png"} fill alt="register image" className="object-cover" />
                </div>

                <section className="w-1/2 h-full gap-8 flex flex-col justify-center items-center">
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className={(titleFont.className, "text-6xl")}>Create Account</h1>
                    </div>

                    <FormRegister />
                </section>
            </section>
        </div>
    );
}
