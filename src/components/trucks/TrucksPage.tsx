"use client";
import { useTrucksForm } from "@/hooks";
import { TrucksForm } from "./trucks-register/TrucksForm";
import { titleFont } from "@/config";

export const TrucksPage = () => {
    const { control, onSubmit, isLoading } = useTrucksForm();

    return (
        <section className="flex flex-col gap-16  items-center border h-full p-10  ">
            <h3 className={`${titleFont.className} border-b pb-4 text-6xl`}>Add your truck</h3>

            <TrucksForm control={control} isLoading={isLoading} onSubmit={onSubmit} />
        </section>
    );
};
