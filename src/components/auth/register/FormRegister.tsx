"use client";

import { Button, Link, Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { useRegister } from "@/hooks";
import { InputsRegister } from "./InputsRegister";

type Roles = "owner" | "driver";

export const FormRegister = () => {
    const [selected, setSelected] = useState<Roles>("owner");
    const { errors, handleSubmit, onSubmit, register } = useRegister();

    return (
        <>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                onSubmit={handleSubmit(onSubmit)}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-center w-[50%] flex flex-col gap-8 "
            >
                <div className="flex gap-4 w-full items-center justify-center">
                    <Tabs
                        size="lg"
                        color="primary"
                        className="text-black"
                        selectedKey={selected}
                        onSelectionChange={(rol) => setSelected(rol as Roles)}
                        classNames={{
                            tabContent: "group-data-[selected=true]:text-[#000]",
                        }}
                        variant="light"
                    >
                        <Tab key="owner" title="OWNER" />
                        <Tab key="driver" title="DRIVER" />
                    </Tabs>
                </div>

                <div className="h-[52vh]  overflow-y-scroll">
                    <InputsRegister isOwner={selected} register={register} errors={errors} />
                </div>

                <Button
                    radius="sm"
                    size="lg"
                    type="submit"
                    color="primary"
                    className="text-primary-blue text-xl font-semibold"
                >
                    Sign-in
                </Button>

                {/* divisor line */}
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>
                <div>
                    <span>
                        Already have an account ?{" "}
                        <Link href="/login" underline="always">
                            login here
                        </Link>
                    </span>
                </div>
            </motion.form>
        </>
    );
};
