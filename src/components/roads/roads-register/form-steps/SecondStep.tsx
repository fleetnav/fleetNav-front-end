"use client";
import { Control } from "react-hook-form";

import { InputController } from "../../../ui/inputController/InputController";
import { FieldStep, STEPS } from "@/utils";
import { RouteFormInput } from "@/interfaces";

interface Props {
    currentStep: number;
    register: Control<RouteFormInput>;
}
export const SecondStep = ({ currentStep, register }: Props) => {
    return (
        <div className="grid grid-cols-2 place-content-center min-h-[40dvh]   p-6 h-full w-full gap-12  ">
            {STEPS[currentStep].fields.map(({ name, label, icon, type }: FieldStep) => (
                <InputController
                    name={name}
                    required={true}
                    placeholder={""}
                    label={label}
                    type={type}
                    control={register}
                    variant="bordered"
                    key={name}
                />
            ))}
        </div>
    );
};
