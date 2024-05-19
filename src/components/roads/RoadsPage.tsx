"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { roadRegisterSchema } from "@/utils/schemas/roadRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Form components
import { Steps } from "./roads-register/Steps";
import { FormBody } from "./roads-register/FormBody";
import { Navigation } from "./roads-register/Navigation";

export type Inputs = z.infer<typeof roadRegisterSchema>;

export const RoadsPage = () => {
    const [previousStep, setPreviousStep] = useState<number>(0);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [FormState, setFormState] = useState<any>();
    const delta = currentStep - previousStep;

    //To do: state for loading when submit
    let isLoading = false;

    const {
        control,
        handleSubmit,
        reset,
        trigger,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(roadRegisterSchema),
    });

    const processForm: SubmitHandler<Inputs> = async (data) => {
        try {
            console.log(data);
            reset();
            toast.success("Road registration created successfully");
        } catch (error: any) {
            toast.error(error);
        }
    };

    const onSubmit = async () => {
        await handleSubmit(processForm)();
    };

    return (
        <section className="flex flex-col  items-center border h-full p-10  ">
            <Steps currentStep={currentStep} />

            <Navigation
                isLoading={isLoading}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setPreviousStep={setPreviousStep}
                onSubmit={onSubmit}
                trigger={trigger}
            >
                <FormBody
                    control={control}
                    currentStep={currentStep}
                    delta={delta}
                    setFormState={setFormState}
                    errors={errors}
                />
            </Navigation>
        </section>
    );
};
