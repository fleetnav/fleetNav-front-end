import React, { Dispatch, SetStateAction } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { Inputs } from "../RoadsPage";

// Steps
import { FirstStep } from "./form-steps/FirstStep";
import { SecondStep } from "./form-steps/SecondStep";

interface Props {
    currentStep: number;
    delta: number;
    control: Control<Inputs>;
    errors: FieldErrors<Inputs>;
    setFormState: Dispatch<SetStateAction<FileList[] | null>>;
}

export const FormBody = ({ currentStep, delta, control, errors, setFormState }: Props) => {
    return (
        <div className="w-full  flex justify-center">
            {currentStep === 0 ? <FirstStep delta={delta} register={control} /> : null}

            {/* {currentStep === 1 ? <SecondStep delta={delta} register={control} errors={errors} /> : null} */}
            {/* {currentStep === 2 ?  <ThirdStep delta={delta} register={control} errors={errors} setFormState={setFormState} : null} */}
        </div>
    );
};
