"user client";
import React, { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Input, Select } from "@nextui-org/react";

export interface Props {
    name: string;
    control: any;
    type: "text" | "number" | "email" | "password" | "select" | "file";
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
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <Controller
            key={name}
            name={name}
            control={control}
            defaultValue={defaultValue || ""}
            rules={{ required }}
            render={({ field: { onChange, value }, fieldState: { error } }) =>
                type === "select" ? (
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
                            variant={variant}
                            defaultSelectedKeys={defaultSelectedKeys}
                            classNames={{
                                value: ["text-black"],
                                trigger: ["border-black"],
                                mainWrapper: ["border-black"],
                            }}
                        >
                            {children}
                        </Select>
                    </>
                ) : type === "password" ? (
                    <>
                        <Input
                            classNames={{
                                input: "flex items-center bg-transparent border-none",
                                inputWrapper: ["border-black"],
                            }}
                            variant={variant}
                            label={label}
                            value={value}
                            onChange={onChange}
                            isInvalid={error ? true : false}
                            errorMessage={error?.message}
                            type={isVisible ? "text" : "password"}
                        />
                    </>
                ) : (
                    <>
                        <Input
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
                )
            }
        />
    );
};
