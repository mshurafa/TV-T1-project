import { useState, useMemo, useEffect, useRef } from "react";
import ConfirmDetails from "../../components/NewInvoice/ConfirmDetails";
import Preview from "../../components/NewInvoice/Preview";
import Confirmation from "../../components/NewInvoice/Confirmation";
import { NEW_INVOICE_STEPS } from "../../constants";
import type { StepperOnChangeType } from "components/types";
import type { ConfirmDetailsInputsType } from "../../types";

export const useNewInvoice = () => {
  const [steps, setSteps] = useState(NEW_INVOICE_STEPS);
  const activeStep = steps.findIndex((step) => step.active);
  const confirmDetailsFormRef = useRef<HTMLButtonElement>(null);

  const onSubmitConfirmDetails = (data: ConfirmDetailsInputsType) => {
    // maybe call API to send the data then store it inside the local storage to save the user progress
    console.log(
      "🚀 ~ file: index.tsx:14 ~ onSubmitConfirmDetails ~ data",
      data
    );
  };

  const stepsContent = useMemo(
    () => [
      <ConfirmDetails
        key="step1"
        ref={confirmDetailsFormRef}
        onSubmit={onSubmitConfirmDetails}
      />,
      <Preview key="step2" />,
      <div key="step3">Payment</div>,
      <Confirmation key="step4" />,
    ],
    []
  );
  const stepContent = stepsContent[activeStep];

  const onStepperChange: StepperOnChangeType = (action) => {
    if (action === "next") {
      const currentStep = steps[activeStep];
      if (currentStep.id === "step1") {
        confirmDetailsFormRef.current?.click();
      }
    } else {
    }
    // // const activeStep = steps.find((step) => step.active);
    // console.log(
    //   "🚀 ~ file: index.tsx:25 ~ onNextClick ~ activeStep",
    //   activeStep
    // );
    // const stepsClone = [...steps];
    // const updatedSteps = stepsClone.map((step) => {
    //   const stepClone = { ...step };
    //   if (step.active) {
    //     console.log("🚀 ~ file: index.tsx:33 ~ updatedSteps ~ step", step);
    //     stepClone.active = false;
    //     stepClone.completed = true;
    //   }
    //   return stepClone;
    // });
    // console.log(
    //   "🚀 ~ file: index.tsx:36 ~ updatedSteps ~ updatedSteps",
    //   updatedSteps
    // );
    // setSteps(updatedSteps);
  };

  useEffect(() => {
    () => {
      // clean storage data
    };
  }, []);

  return { steps, activeStep, stepContent, onStepperChange };
};

export default useNewInvoice;
