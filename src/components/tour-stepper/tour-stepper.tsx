import { Button } from "../button";
import { useState, useCallback } from 'react'

interface TourStepperProps {
    classNames? : string;
    stepComponents: React.ReactNode[];
}

const TourStepper = ({classNames, stepComponents}: TourStepperProps) => {
    const modalClassNames = `p-16 w-131 my-auto justify-center bg-white items-center overflow-x-hidden overflow-y-auto inset-0 z-50 my-auto rounded-2.5xl shadow-custom ${classNames}`;
    const stepsCount = stepComponents?.length;
    const [currentStep, setCurrentStep] = useState<number>(0)

    const handleNextStep = useCallback(() => {
        setCurrentStep(prevStep => prevStep + 1);
    }, [setCurrentStep])

    const handlePrevStep = useCallback(() => {
        setCurrentStep(prevStep => prevStep - 1);
    }, [setCurrentStep])

    return (
        <div className="w-full h-screen flex justify-center ">
            <div className={modalClassNames}>
                <div className="flex justify-center">
                    <Stepper count={stepsCount} currentStep={currentStep} />
                </div>
                <div className="mt-16 flex justify-center">
                    {stepComponents[currentStep]}
                </div>
                <div className="mt-16 flex justify-center gap-2">
                    <Button disabled={currentStep === 0} onClick={handlePrevStep} label={currentStep === 0 ? "Send again" : "Go back"} />
                    <Button disabled={currentStep === stepsCount - 1} onClick={handleNextStep} label="Continue" type="primary" />
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

interface StepperProps {
    count: number;
    currentStep: number;
}
  
const Stepper = ({ count, currentStep }: StepperProps) => {
    const steps = Array.from({ length: count }, (_, index) => index);

    return (
        <div className="flex items-center gap-2">
            {steps.map((step) => (
                <div key={step} className={`rounded-semilg w-15 h-1.5 ${step <= currentStep ? 'bg-primary' : 'bg-tangerine'}`}></div>
            ))}
        </div>
    );
};

export default TourStepper