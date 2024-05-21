"use client"
import React from 'react'
import { motion } from "framer-motion";
import { useFormEdit } from '@/hooks';
import { InputsFormEdit } from '@/components';
import { SelectAvatar } from '@/components';
import { Button } from '@nextui-org/react';
export const FormEditProfile = () => {
  const { errors, handleSubmit, onSubmit, register } = useFormEdit();
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      onSubmit={handleSubmit(onSubmit)}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="text-center w-full flex flex-col gap-8 "
    >
      <div className="h-full w-full">
        <InputsFormEdit register={register} errors={errors}></InputsFormEdit>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl">Select your Avatar</h3>
        <SelectAvatar></SelectAvatar>
      </div>
      <div className="">
        <Button
          radius="sm"
          size="lg"
          type="submit"
          color="primary"
          className="text-primary-blue text-xl font-semibold"
        >
          Edit-Profile
        </Button>
      </div>
    </motion.form>
  );
}
 