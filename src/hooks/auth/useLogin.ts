import { SubmitHandler, useForm } from "react-hook-form";

import { LoginForm } from "@/interfaces";
import { useAuthStore } from "@/store";

export const useLogin = () => {
    const login = useAuthStore((state) => state.login);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {
        console.log(data);

        const res = await login(data.email, data.password);

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

    return { register, handleSubmit, errors, onSubmit };
};
