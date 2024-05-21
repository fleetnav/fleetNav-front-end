"use client";

// Form components
import { Steps } from "./roads-register/Steps";
import { FormBody } from "./roads-register/FormBody";
import { Navigation } from "./roads-register/Navigation";
import { useStepForm } from "@/hooks";

export const RoadsPage = () => {
    const { control, trigger, currentStep, setCurrentStep, onSubmit, isLoading } = useStepForm();

    return (
        <section className="flex flex-col  items-center border h-full p-10  ">
            <Steps currentStep={currentStep} />
            <Navigation
                isLoading={isLoading}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                onSubmit={onSubmit}
                trigger={trigger}
            >
                <FormBody control={control} currentStep={currentStep} />
            </Navigation>
        </section>
    );
};
