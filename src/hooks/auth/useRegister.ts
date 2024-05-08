"use client";

import { RegisterForm } from "@/interfaces";
import { useAuthStore } from "@/store";
import { SubmitHandler, useForm } from "react-hook-form";

export const useRegister = () => {
    const signUp = useAuthStore((state) => state.signUp);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
        const res = await signUp(data);

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