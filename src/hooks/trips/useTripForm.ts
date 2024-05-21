"use client";
import { TripFormInput } from "@/interfaces";
import { TenantService } from "@/services";
import { tripRegisterSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export const useTripForm = () => {
    const router = useRouter();

    //To do: state for loading when submit
    let isLoading = false;

    const {
        control,
        handleSubmit,
        reset,
        trigger,
        formState: { errors },
    } = useForm<TripFormInput>({
        resolver: zodResolver(tripRegisterSchema),
    });

    const processForm: SubmitHandler<TripFormInput> = async (data) => {
        const service = new TenantService();

        // toast.promise(service.createVehicle(data), {
        //     loading: "Loading...",
        //     success: (data) => {
        //         reset();
        //         router.push("/dashboard");
        //         return `Vehicle registration created successfully`;
        //     },
        //     error: (error) => toast.error(error?.message),
        // });
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
