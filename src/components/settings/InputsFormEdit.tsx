"use client"

import { UserFormEdit } from "@/interfaces"
import { inputsFormEditList, inputsRegisterList } from "@/utils";
import { Input} from "@nextui-org/react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form"

interface Props {
  register : UseFormRegister<UserFormEdit>;
  errors: FieldErrors<any>
}

export const InputsFormEdit = ({register , errors}: Props) => {
  const [scope , animate] = useAnimate()
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  useEffect(()=>{
    animate(".motion", {opacity : [0,1]}, {delay : stagger(0.1)})
  },[])
  const listInputs = inputsFormEditList
  return (
    <motion.section
      ref={scope}
      className="flex w-full border border-yellow-400"
    >
      {listInputs.map((input) => (
        <div key={input.name} className="motion">
          <Input
            isRequired
            radius="sm"
            variant="bordered"
            classNames={{
              inputWrapper: "border-white/60",
            }}
            startContent={
              <i className={`${input.icon}`} role="img" aria-hidden="true" />
            }
            endContent={
              input.name === "password" && (
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <i
                      className="icon-[mdi--eye]"
                      role="img"
                      aria-hidden="true"
                    />
                  ) : (
                    <i
                      className="icon-[mdi--eye-off]"
                      role="img"
                      aria-hidden="true"
                    />
                  )}
                </button>
              )
            }
            size="md"
            label={input.label}
            type={
              input.type === "password"
                ? isVisible
                  ? "text"
                  : "password"
                : input.type
            }
            {...register(input.name, {
              required: true,
              pattern: input.patter,
            })}
          />
          {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
          {(errors[input.name]?.type === "required" ||
            errors[input.name]?.type === "pattern") && (
            <span className="text-red-500 fade-in text-sm">{input.error}</span>
          )}
        </div>
      ))}
    </motion.section>
  );
}
