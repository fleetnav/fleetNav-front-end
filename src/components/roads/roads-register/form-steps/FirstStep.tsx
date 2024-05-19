"user client";
import { Control } from "react-hook-form";
import { Inputs } from "../../RoadsPage";

import { InputController } from "../InputController";
import { FieldStep, STEPS } from "@/utils";

interface Props {
    delta: number;
    register: Control<Inputs>;
}

export const FirstStep = ({ delta, register }: Props) => {
    return (
        <div className="grid grid-cols-2 place-content-center   p-6 h-full w-full  gap-8">
            {STEPS[delta].fields.map(({ name, label, icon, type }: FieldStep) => (
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
