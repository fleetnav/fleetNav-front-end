"use client";
import { RouteFormInput } from "@/interfaces";
import { TenantService } from "@/services";
import { roadRegisterSchema } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export const useStepForm = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const router = useRouter();

    //To do: state for loading when submit
    let isLoading = false;

    const {
        control,
        handleSubmit,
        reset,
        trigger,
        formState: { errors },
    } = useForm<RouteFormInput>({
        resolver: zodResolver(roadRegisterSchema),
    });

    const processForm: SubmitHandler<RouteFormInput> = async (data) => {
        const service = new TenantService();

        toast.promise(service.createRoute(data), {
            loading: "Loading...",
            success: (data) => {
                reset();
                router.push("/dashboard");
                return `Road registration created successfully`;
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
        currentStep,
        setCurrentStep,
        onSubmit,
        isLoading,
    };
};
