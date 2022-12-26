import { useState, useMemo, useEffect, useRef } from "react";
import ConfirmDetails from "../../components/PayInvoice/ConfirmDetails";
import Preview from "../../components/PayInvoice/Preview";
import Confirmation from "../../components/PayInvoice/Confirmation";
import { PAY_INVOICE_STEPS } from "../../data";
import type { StepperOnChangeType } from "components/types";
import type { ConfirmDetailsInputsType, PayInvoiceStepType } from "../../types";

export const usePayInvoice = () => {
  const [steps, setSteps] = useState(PAY_INVOICE_STEPS);
  const confirmDetailsFormRef = useRef<HTMLButtonElement>(null);
  const activeStep = steps.findIndex((step) => step.active);
  const currentStep = steps[activeStep];
  const nextStep = steps[activeStep + 1];
  const previousStep = steps[activeStep - 1];

  const nextActionHandler = () => {
    const updatedCurrentStep: PayInvoiceStepType = {
      ...currentStep,
      completed: true,
      active: false,
    };
    const updatedNextStep: PayInvoiceStepType = {
      ...nextStep,
      active: true,
    };
    const updatedSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return updatedCurrentStep;
      } else if (step.id === nextStep.id) {
        return updatedNextStep;
      } else {
        return step;
      }
    });
    setSteps(updatedSteps);
  };

  const backActionHandler = () => {
    const updatedStep: PayInvoiceStepType = {
      ...currentStep,
      active: false,
    };
    const updatedPreviousStep: PayInvoiceStepType = {
      ...previousStep,
      active: true,
    };
    const updatedSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return updatedStep;
      } else if (step.id === previousStep.id) {
        return updatedPreviousStep;
      } else {
        return step;
      }
    });
    setSteps(updatedSteps);
  };

  const onSubmitConfirmDetails = (data: ConfirmDetailsInputsType) => {
    // maybe call API to send the data then store it inside the local storage to save the user progress
    nextActionHandler();
  };

  const onStepperChange: StepperOnChangeType = (action) => {
    if (action === "next") {
      if (currentStep.id === "step1") {
        confirmDetailsFormRef.current?.click();
      } else {
        nextActionHandler();
      }
    } else {
      backActionHandler();
      console.log("back to the previous step");
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const stepContent = stepsContent[activeStep];

  useEffect(() => {
    () => {
      // clean storage data
    };
  }, []);

  return { steps, activeStep, stepContent, onStepperChange };
};

export default usePayInvoice;
