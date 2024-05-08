"use client";

import { Input } from "@nextui-org/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { RegisterForm } from "@/interfaces";
import { inputsRegisterList } from "@/utils";
import { useState } from "react";

interface Props {
    register: UseFormRegister<RegisterForm>;
    errors: FieldErrors<RegisterForm>;
}

export const InputsRegister = ({ register, errors }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <section className="flex flex-col w-full max-[600px]:  gap-4">
            {inputsRegisterList.map((input) => (
                <div key={input.name} className="">
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

                    {(errors[input.name]?.type === "required" || errors[input.name]?.type === "pattern") && (
                        <span className="text-red-500 fade-in text-sm">{input.error}</span>
                    )}
                </div>
            ))}
        </section>
    );
};