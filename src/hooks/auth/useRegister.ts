"use client";

import { RegisterForm } from "@/interfaces";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
    rol: "owner" | "driver";
}
export const useRegister = ({ rol }: Props) => {
    const router = useRouter();
    const signUp = useAuthStore((state) => state.signUp);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const onSubmit: SubmitHandler<RegisterForm> = async (formData) => {
        try {
            const { status } = await signUp(formData, rol);

            if (status === 201) {
                toast.success("Account created successful!");
                router.push("/dashboard");
            }
        } catch (error) {
            toast.error("Error creating account");
        }
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};
