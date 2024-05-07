"use client";

import { useRegister } from "@/hooks";
import { motion } from "framer-motion";
import { InputsRegister } from "./InputsRegister";
import { Button } from "@nextui-org/react";

export const FormRegister = () => {
    const { errors, handleSubmit, onSubmit, register } = useRegister();

    return (
        <>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-center w-[50%] flex flex-col gap-3 "
            >
                <InputsRegister register={register} errors={errors} />

                <Button
                    radius="sm"
                    size="lg"
                    type="submit"
                    color="primary"
                    className="text-primary-blue text-xl font-semibold"
                >
                    Register
                </Button>

                {/* divisor line */}
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>
            </motion.form>
        </>
    );
};
