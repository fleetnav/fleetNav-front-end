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
        toast.promise(signUp(formData, rol), {
            loading: "Loading...",
            success: ({ status, data }) => {
                if (status === 201) {
                    router.push("/dashboard");
                    return `successful registration ${data?.user.name}!`;
                }
            },
            error: (error) => toast.error(error?.message),
        });
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};
