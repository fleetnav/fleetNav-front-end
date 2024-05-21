"use client";

import { UserFormEdit } from "@/interfaces";
import { inputsFormEditList, inputsRegisterList } from "@/utils";
import { Input } from "@nextui-org/react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
    register: UseFormRegister<UserFormEdit>;
    errors: FieldErrors<any>;
}

export const InputsFormEdit = ({ register, errors }: Props) => {
    const [scope, animate] = useAnimate();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    useEffect(() => {
        animate(".motion", { opacity: [0, 1] }, { delay: stagger(0.1) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const listInputs = inputsFormEditList;
    return (
        <motion.section ref={scope} className="grid grid-rows-2 grid-flow-col w-full  gap-x-10 gap-y-12 pt-16">
            {listInputs.map((input) => (
                <div key={input.name} className="motion  w-full ">
                    <Input
                        radius="sm"
                        label={input.label}
                        variant="bordered"
                        labelPlacement="outside"
                        classNames={{
                            label: ["text-white/50 ", "text-xl", "!left-4", "!top-[8%]"],

                            input: ["text-white/90 ", "placeholder:text-red-700/50 ", "!h-full"],
                            innerWrapper: ["!h-full"],
                            inputWrapper: [
                                "border",
                                "border-white/30",

                                "group-data-[focus=true]:bg-white/5",

                                "!cursor-text",
                                "!h-full",
                            ],
                            base: "h-24",
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
                        type={input.type === "password" ? (isVisible ? "text" : "password") : input.type}
                        {...register(input.name, {
                            required: false,
                            pattern: input.patter,
                        })}
                    />
                </div>
            ))}
        </motion.section>
    );
};
