"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginForm } from "@/interfaces";
import { useAuthStore, useChatStore } from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useLogin = () => {
    const login = useAuthStore((state) => state.login);
    const router = useRouter();
    const connect = useChatStore((state) => state.connect);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        toast.promise(login(data.email, data.password), {
            loading: "Loading...",
            success: ({ status, user, error }) => {
                connect(user!.email, user!.name, user!).then();

                status === 201 ? router.push("/dashboard") : toast.error(error?.message);
                return `welcome ${user?.name}!`;
            },
            error: (error) => toast.error(error?.message),
        });
    };

    return { register, handleSubmit, errors, onSubmit };
};
