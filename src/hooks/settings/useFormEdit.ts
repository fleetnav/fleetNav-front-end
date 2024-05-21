"use client";

import { RegisterForm, UserFormEdit } from "@/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";

export const useFormEdit = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserFormEdit>();

    const onSubmit: SubmitHandler<UserFormEdit> = async (data) => {
        console.log(data);
        // const res = await signUp(data);

        // if (!res.ok) {
        //     toast.error(res.message);
        //     return;
        // }
        // await login(email.toLowerCase(), password);
        // toast.success("Usuario creado con exito");
        // setTimeout(() => {
        //     window.location.replace("/dashboard");
        // }, 2000);
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};
