import React from 'react'
import { motion } from "framer-motion";
import { useFormEdit } from '@/hooks';
import { InputsFormEdit } from './InputsFormEdit';

export const FormEditProfile = () => {
  const { errors, handleSubmit, onSubmit, register } = useFormEdit();
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      onSubmit={handleSubmit(onSubmit)}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="text-center w-full flex border border-yellow-500 gap-8 "
    >
      <div className="h-full">
        <InputsFormEdit register={register} errors={errors}></InputsFormEdit>
      </div>
    </motion.form>
  );
}
 