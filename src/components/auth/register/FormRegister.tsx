"use client";

import { Button, Link } from "@nextui-org/react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

import { useRegister } from "@/hooks";
import { InputsRegister } from "./InputsRegister";

export const FormRegister = () => {
    const [isOwner, setIsOwner] = useState(true);
    const { errors, handleSubmit, onSubmit, register } = useRegister();

    return (
        <>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-center w-[50%] flex flex-col gap-8 "
            >
                <div className="flex gap-4 w-full items-center justify-center">
                    <Button
                        color="primary"
                        className={clsx("text-black", {
                            "text-white": !isOwner,
                        })}
                        variant={isOwner ? "solid" : "bordered"}
                        size="lg"
                        onClick={() => setIsOwner(true)}
                    >
                        OWNER
                    </Button>
                    <Button
                        color="primary"
                        variant={isOwner ? "bordered" : "solid"}
                        size="lg"
                        className={clsx("text-black", {
                            "text-white": isOwner,
                        })}
                        onClick={() => setIsOwner(false)}
                    >
                        DRIVER
                    </Button>
                </div>
                <InputsRegister isOwner={isOwner} register={register} errors={errors} />
                <Button
                    radius="sm"
                    size="lg"
                    type="submit"
                    color="primary"
                    className="text-primary-blue text-xl font-semibold"
                >
                    Sign-in
                </Button>

                {/* divisor line */}
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>
                <div>
                    <span>
                        Already have an account ?{" "}
                        <Link href="/login" underline="always">
                            login here
                        </Link>
                    </span>
                </div>
            </motion.form>
        </>
    );
};
