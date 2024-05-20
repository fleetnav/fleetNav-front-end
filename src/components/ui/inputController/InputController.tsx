"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Controller, FieldError } from "react-hook-form";
import { Input, Select, SelectItem, TimeInput } from "@nextui-org/react";

export interface Props {
    name: string;
    control: any;
    type: "text" | "number" | "email" | "password" | "select" | "file" | "time" | "date";
    placeholder: string;
    required: boolean;
    children?: any;
    label?: string;
    variant: any;
    defaultValue?: string;
    defaultSelectedKeys?: string[];
    setSubmitBtnPressed?: Dispatch<SetStateAction<boolean>>;
}

export const InputController = ({
    name,
    control,
    type,
    placeholder,
    required,
    children,
    label,
    variant,
    defaultSelectedKeys,
    setSubmitBtnPressed,
    defaultValue,
}: Props) => {
    const renderInput = (
        type: Props["type"],
        error: FieldError | undefined,
        onChange: (...event: any[]) => void,
        value: any
    ) => {
        switch (type) {
            case "select":
                return (
                    <>
                        <Select
                            onOpenChange={() => {
                                setSubmitBtnPressed && setSubmitBtnPressed(false);
                            }}
                            placeholder={placeholder}
                            isInvalid={error ? true : false}
                            errorMessage={error?.message}
                            key={value}
                            onChange={onChange}
                            selectedKeys={[value]}
                            label={label}
                            size="lg"
                            radius="sm"
                            // items={items}
                            variant={variant}
                            defaultSelectedKeys={defaultSelectedKeys}
                            classNames={{
                                value: ["text-white"],
                                trigger: ["border-white/60"],
                                mainWrapper: ["border-white/60"],
                            }}
                        >
                            {children}
                        </Select>
                    </>
                );
            case "time":
                return (
                    <>
                        <TimeInput
                            label={label}
                            classNames={{
                                inputWrapper: "border-white/60",
                            }}
                            value={value}
                            size="lg"
                            onChange={onChange}
                            variant={variant}
                            radius="sm"
                            granularity="minute"
                        />
                    </>
                );

            default:
                return (
                    <>
                        <Input
                            size="lg"
                            classNames={{
                                inputWrapper: "border-white/60",
                            }}
                            radius="sm"
                            isInvalid={error ? true : false}
                            errorMessage={error?.message}
                            value={value}
                            onChange={onChange}
                            label={label}
                            type={type}
                            variant={variant}
                            placeholder={placeholder}
                        />
                    </>
                );
        }
    };

    return (
        <Controller
            key={name}
            name={name}
            control={control}
            defaultValue={defaultValue || ""}
            rules={{ required }}
            render={({ field: { onChange, value }, fieldState: { error } }) =>
                renderInput(type, error, onChange, value)
            }
        />
    );
};
