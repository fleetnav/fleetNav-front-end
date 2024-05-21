"use client";
import clsx from "clsx";
import { Button, SelectItem } from "@nextui-org/react";

import { InputController } from "@/components";
import { TruckFormInput } from "@/interfaces";
import { FieldStep, trucksFields } from "@/utils";
import { Control } from "react-hook-form";

interface Props {
    control: Control<TruckFormInput>;
    onSubmit: () => void;
    isLoading: boolean;
}

export const TrucksForm = ({ control, isLoading, onSubmit }: Props) => {
    const firstForm = trucksFields.slice(0, 4);
    const secondForm = trucksFields.slice(4);

    return (
        <section className="flex flex-col items-center   p-6 h-full w-full  gap-12">
            <div className="flex flex-col w-full gap-8 justify-center text-center">
                <h3 className="text-2xl">Truck information</h3>
                <div className="grid grid-cols-2 w-full gap-8">
                    {firstForm.map(({ name, label, icon, type }: FieldStep) => (
                        <InputController
                            name={name}
                            required={true}
                            placeholder={""}
                            label={label}
                            type={type}
                            control={control}
                            variant="bordered"
                            key={name}
                        >
                            <SelectItem key={"ON_TRIP"} value={"ON_TRIP"}>
                                on trip
                            </SelectItem>
                            <SelectItem key={"OFF_TRIP"} value={"OFF_TRIP"}>
                                off trip
                            </SelectItem>
                            <SelectItem key={"ON_MAINTENANCE"} value={"ON_MAINTENANCE"}>
                                on maintenance
                            </SelectItem>
                        </InputController>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full gap-8 justify-center text-center">
                <h3 className="text-2xl  w-full pb-4">Next Maintenance</h3>
                <div className="grid grid-cols-2 gap-8">
                    {secondForm.map(({ name, label, icon, type }: FieldStep) => (
                        <InputController
                            name={name}
                            required={true}
                            placeholder={""}
                            label={label}
                            type={type}
                            control={control}
                            variant="bordered"
                            key={name}
                        />
                    ))}
                </div>
            </div>

            <Button
                isLoading={isLoading}
                onClick={onSubmit}
                type="submit"
                size="lg"
                className={clsx(
                    " w-[40%] text-xl px-2 py-1  font-semibold text-black bg-white ring-inset disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:shadow-md active:shadow-inner"
                )}
            >
                Submit
            </Button>
        </section>
    );
};
