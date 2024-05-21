import { STEPS } from "@/utils";

interface Props {
    currentStep: number;
}

export const Steps = ({ currentStep }: Props) => {
    return (
        <ol role="list" className="w-2/3 border-b py-4 flex items-center justify-center">
            {STEPS.map((step, index) => (
                <li key={step.name} className="md:flex-1 ">
                    {currentStep > index ? (
                        <div className="group flex w-full gap-x-8 gap-y-1 py-2 transition-colors items-center relative">
                            <span className="text-sm font-medium text-white transition-colors w-10 h-10 bg-black flex justify-center items-center border rounded-full">
                                <span className="icon-[ph--check] text-2xl"></span>
                            </span>
                            <p className="text-xs text-center min-h-[32px] lg:text-sm font-medium text-[#47FFD8]">
                                {step.name}
                            </p>
                        </div>
                    ) : currentStep === index ? (
                        <div className="relative flex w-full gap-x-8  py-2 items-center" aria-current="step">
                            <span className="text-sm font-medium text-primary-blue w-10 h-10 border-[#47FFD8] bg-[#47FFD8] flex justify-center items-center border rounded-full">
                                {step.id}
                            </span>
                            <span className="text-xs min-h-[32px]  lg:text-sm text-center font-medium text-[#47FFD8]">
                                {step.name}
                            </span>
                        </div>
                    ) : (
                        <div className="relative flex justify-center w-full gap-x-8 gap-y-1 py-2 items-center">
                            <span className="text-sm font-medium text-gray-500 transition-colors w-10 h-10 flex justify-center items-center border-gray-300 border rounded-full">
                                {step.id}
                            </span>
                            <span className="text-xs lg:text-sm min-h-[32px] font-medium text-center text-[#47FFD8]">
                                {step.name}
                            </span>
                        </div>
                    )}
                </li>
            ))}
        </ol>
    );
};
