"use client";

import { RegisterForm } from "@/interfaces";
import { AuthService } from "@/services";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const useRegister = () => {
    const router = useRouter();

    const signUp = useAuthStore((state) => state.signUp);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const onSubmit: SubmitHandler<RegisterForm> = async (formData) => {
        const authService = new AuthService();

        const data = await authService.registerUser(formData);

        if (data.status === 201) {
            toast.success("Account created successful!");

            router.push("login");
        }
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};
