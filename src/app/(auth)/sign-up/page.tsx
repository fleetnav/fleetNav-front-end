import { FormRegister } from "@/components";
import { titleFont } from "@/config";

import Image from "next/image";

export const metadata = {
    title: "sign-up",
    description: "",
};
interface Props {
    searchParams?: { [key: string]: string | undefined };
}

export default function SignUpPage({ searchParams }: Props) {
    const referralCode = searchParams?.referralCode;

    return (
        <div>
            <section className="h-dvh w-dvw flex">
                <div className=" relative w-1/2 h-full">
                    <Image
                        src={"/images/auth/register-photo.webp"}
                        fill
                        alt="register image"
                        className="object-cover object-right"
                    />

                    <div className="h-full absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-primary-blue/60 to-transparent">
                        {" "}
                    </div>
                </div>

                <section className="w-1/2 h-full gap-8 flex flex-col justify-center items-center">
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className={`${titleFont.className} text-6xl`}>Create Account</h1>
                    </div>

                    <FormRegister referralCode={referralCode} />
                </section>
            </section>
        </div>
    );
}
