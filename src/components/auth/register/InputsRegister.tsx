"use client";

import { Input } from "@nextui-org/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { stagger, useAnimate, motion } from "framer-motion";
import { RegisterForm } from "@/interfaces";

import { useEffect, useState } from "react";
import { inputsRegisterList } from "@/utils";

interface Props {
    register: UseFormRegister<RegisterForm>;
    errors: FieldErrors<any>;
    isOwner: "owner" | "driver";
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
export const InputsRegister = ({ register, errors, isOwner }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scope, animate] = useAnimate();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const newList = () => {
        if (isOwner === "owner") {
            return inputsRegisterList.slice(0, 4);
        }

        return inputsRegisterList;
    };

    useEffect(() => {
        animate(".motion", { opacity: [0, 1] }, { delay: stagger(0.1) });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOwner]);

    return (
        <motion.section ref={scope} className="flex flex-col w-full max-[600px]:  gap-4">
            {newList().map((input) => (
                <div key={input.name} className="motion">
                    <Input
                        isRequired
                        radius="sm"
                        variant="bordered"
                        classNames={{
                            inputWrapper: "border-white/60",
                        }}
                        startContent={<i className={`${input.icon}`} role="img" aria-hidden="true" />}
                        endContent={
                            input.name === "password" && (
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <i className="icon-[mdi--eye]" role="img" aria-hidden="true" />
                                    ) : (
                                        <i className="icon-[mdi--eye-off]" role="img" aria-hidden="true" />
                                    )}
                                </button>
                            )
                        }
                        size="md"
                        label={input.label}
                        type={input.type === "password" ? (isVisible ? "text" : "password") : input.type}
                        {...register(input.name, {
                            required: true,
                            pattern: input.patter,
                        })}
                    />
                    {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
                    {(errors[input.name]?.type === "required" || errors[input.name]?.type === "pattern") && (
                        <span className="text-red-500 fade-in text-sm">{input.error}</span>
                    )}
                </div>
            ))}
        </motion.section>
    );
};
