import { titleFont } from "@/config";
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";

export default function SignUpPage() {
    return (
        <div>
            <section className="h-dvh w-dvw flex">
                <div className=" relative w-1/2 h-full">
                    <Image src={"/images/auth/register.png"} fill alt="register image" className="object-cover" />
                </div>

                <div className="w-1/2 h-full flex flex-col justify-center items-center">
                    <h1 className={(titleFont.className, "text-6xl")}>Register</h1>

                    <form action="" className="flex flex-col gap-6">
                        <Input
                            variant={"underlined"}
                            placeholder="Enter your email"
                            type="email"
                            label="correo"
                            size="lg"
                            color={"primary"}
                        />
                        <Input
                            size="lg"
                            variant={"underlined"}
                            type="password"
                            label="Contraseña"
                            color="primary"
                            placeholder="Enter your email"
                        />

                        <Button color="primary">Solid</Button>
                    </form>
                </div>

                <div></div>
            </section>
        </div>
    );
}
