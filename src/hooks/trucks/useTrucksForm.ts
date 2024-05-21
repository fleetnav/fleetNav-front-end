"use client";
import { TruckFormInput } from "@/interfaces";
import { TenantService } from "@/services";
import { useAuthStore } from "@/store";
import { truckRegisterSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const useTrucksForm = () => {
    const router = useRouter();

    //To do: state for loading when submit
    let isLoading = false;

    const {
        control,
        handleSubmit,
        reset,
        trigger,
        formState: { errors },
    } = useForm<TruckFormInput>({
        resolver: zodResolver(truckRegisterSchema),
    });

    const processForm: SubmitHandler<TruckFormInput> = async (data) => {
        const service = new TenantService();
        toast.promise(service.createVehicle(data), {
            loading: "Loading...",
            success: (data) => {
                reset();
                router.push("/dashboard");
                return `Vehicle registration created successfully`;
            },
            error: (error) => toast.error(error?.message),
        });
    };

    const onSubmit = async () => {
        await handleSubmit(processForm)();
    };

    return {
        control,
        trigger,
        errors,
        onSubmit,
        isLoading,
    };
};
