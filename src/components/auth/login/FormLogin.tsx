"use client";
import { useLogin } from "@/hooks";
import { Button, Input, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { InputsLogin } from "./InputsLogin";

export const FormLogin = () => {
    const { register, errors, handleSubmit, onSubmit } = useLogin();

    return (
        <>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-center w-[50%] flex flex-col gap-3 "
            >
                <InputsLogin register={register} errors={errors} />

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
                        don&apos;t have an account ?{" "}
                        <Link href="/sign-up" underline="always">
                            register here
                        </Link>
                    </span>
                </div>
            </motion.form>
        </>
    );
};
