"use client";

import { RegisterForm } from "@/interfaces";

import { useAuthStore, useChatStore } from "@/store";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useStompProvider } from "../chat/useStompProvider";

interface Props {
    rol: "owner" | "driver";
}
export const useRegister = ({ rol }: Props) => {
    const router = useRouter();
    const signUp = useAuthStore((state) => state.signUp);
    const connect = useChatStore((state) => state.connect);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>();

    const onSubmit: SubmitHandler<RegisterForm> = async (formData) => {
        toast.promise(signUp(formData, rol), {
            loading: "Loading...",
            success: ({ status, data }) => {
                connect(data.user.email, data.user.name, data.user).then();
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
