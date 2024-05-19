import { STEPS } from "@/utils";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { Inputs } from "../RoadsPage";
import { UseFormTrigger } from "react-hook-form";

interface Props {
    isLoading: boolean;
    currentStep: number;
    setPreviousStep: Dispatch<SetStateAction<number>>;
    setCurrentStep: Dispatch<SetStateAction<number>>;
    onSubmit: () => Promise<void>;
    trigger: UseFormTrigger<Inputs>;
    children: React.ReactNode;
}

export const Navigation = ({
    isLoading,
    currentStep,
    setCurrentStep,
    setPreviousStep,
    onSubmit,
    trigger,
    children,
}: Props) => {
    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep);
            setCurrentStep((step) => step - 1);
        }
    };
    type FieldName = keyof Inputs;

    const next = async () => {
        const fields = STEPS[currentStep].fields.name;
        const output = await trigger(fields as FieldName[], { shouldFocus: true });

        if (!output) return;

        if (currentStep < STEPS.length - 1) {
            //   if (currentStep === STEPS.length -mileage 2) {
            //     await handleSubmit(processForm)();
            //   }
            setPreviousStep(currentStep);
            setCurrentStep((step) => step + 1);
        }
    };

    return (
        <aside className="flex  h-full w-full items-center justify-center flex-col  min-w-24 absolute lg:relative bottom-8 lg:bottom-auto">
            <div className="flex w-full justify-center items-center flex-row lg:flex-col gap-6 *:transition-all duration-400">
                <Button
                    type="button"
                    onClick={prev}
                    disabled={currentStep === 0}
                    className="flex w-40 justify-around items-center px-2 py-1 text-sm font-semibold text-black bg-white disabled:cursor-not-allowed disabled:opacity-50 shadow-sm active:shadow-inner"
                >
                    <span className="icon-[material-symbols--arrow-warm-up-rounded] -rotate-90"></span>
                    Previous
                </Button>

                <div className="w-2/3 ">{children}</div>

                <Button
                    type="button"
                    onClick={next}
                    disabled={currentStep === STEPS.length - 1}
                    className={clsx(
                        "flex items-center min-w-[95px] justify-around px-2 py-1 text-sm font-semibold text-black bg-white ring-inset disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:shadow-md active:shadow-inner",
                        {
                            hidden: currentStep === STEPS.length - 1,
                        }
                    )}
                >
                    Next
                    <span className="icon-[material-symbols--arrow-warm-up-rounded] rotate-90"></span>
                </Button>
                <Button
                    isLoading={isLoading}
                    onClick={onSubmit}
                    className={clsx(
                        "hidden w-40 px-2 py-1 text-sm font-semibold text-black bg-white ring-inset disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:shadow-md active:shadow-inner",
                        {
                            flex: currentStep === STEPS.length - 1,
                        }
                    )}
                >
                    Submit
                </Button>
            </div>
        </aside>
    );
};
