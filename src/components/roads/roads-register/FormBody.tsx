"use client";

import { Control } from "react-hook-form";

// Steps
import { FirstStep } from "./form-steps/FirstStep";
import { SecondStep } from "./form-steps/SecondStep";
import { ThirdStep } from "./form-steps/ThirdStep";
import { RouteFormInput } from "@/interfaces";

interface Props {
    currentStep: number;
    control: Control<RouteFormInput>;
}

export const FormBody = ({ currentStep, control }: Props) => {
    return (
        <form className="w-full  flex justify-center">
            {currentStep === 0 ? <FirstStep currentStep={currentStep} register={control} /> : null}

            {currentStep === 1 ? <SecondStep currentStep={currentStep} register={control} /> : null}
            {currentStep === 2 ? <ThirdStep currentStep={currentStep} register={control} /> : null}
        </form>
    );
};
