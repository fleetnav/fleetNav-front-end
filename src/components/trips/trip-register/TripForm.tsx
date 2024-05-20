import { InputController } from "@/components";
import { RouteContent, VehicleContent } from "@/interfaces";
import { FieldStep, tripFields } from "@/utils";

import { useTripForm } from "@/hooks";
import { Select, SelectItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";

interface Props {
    routesData: RouteContent[];
    vehiclesData: VehicleContent[];
}

export const TripForm = ({ routesData, vehiclesData }: Props) => {
    const { control, onSubmit, isLoading } = useTripForm();

    console.log(routesData);
    console.log(vehiclesData);

    return (
        <section className="grid grid-cols-2 gap-8 justify-center items-center">
            {tripFields.slice(0, 3).map(({ name, label, icon, type }: FieldStep) => (
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

            <Controller
                name={"vehicleId"}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Select
                        className="max-w-xs"
                        isLoading={vehiclesData.length === 0 ? true : false}
                        items={vehiclesData}
                        label="select vehicle"
                        placeholder="Select a route"
                        variant="bordered"
                        radius="sm"
                        size="lg"
                        onChange={onChange}
                        isInvalid={error ? true : false}
                        errorMessage={error?.message}
                        selectedKeys={[value]}
                        classNames={{
                            value: ["text-white"],
                            trigger: ["border-white/60"],
                            mainWrapper: ["border-white/60"],
                        }}
                    >
                        {(item) => (
                            <SelectItem key={item.numberPlate} className="capitalize">
                                {item.numberPlate}
                            </SelectItem>
                        )}
                    </Select>
                )}
            />

            <Controller
                name={"routeId"}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Select
                        className="max-w-xs"
                        isLoading={routesData.length === 0 ? true : false}
                        items={routesData}
                        label="select route"
                        placeholder="Select a route"
                        variant="bordered"
                        radius="sm"
                        size="lg"
                        onChange={onChange}
                        isInvalid={error ? true : false}
                        errorMessage={error?.message}
                        selectedKeys={[value]}
                        classNames={{
                            value: ["text-white"],
                            trigger: ["border-white/60"],
                            mainWrapper: ["border-white/60"],
                        }}
                    >
                        {(item) => (
                            <SelectItem key={item.name} className="capitalize">
                                {item.name}
                            </SelectItem>
                        )}
                    </Select>
                )}
            />
        </section>
    );
};
