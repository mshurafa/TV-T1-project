import { useState, useEffect } from "react";
import { NEW_INVOICE_STEPS } from "../../constants";

export const useNewInvoice = () => {
  const [steps, setSteps] = useState(NEW_INVOICE_STEPS);
  const activeStep = steps.findIndex((step) => step.active);

  // const onNextClick = (stepId: string) => {
  //   const activeStep = steps.find((step) => step.active);
  //   console.log(
  //     "🚀 ~ file: index.tsx:25 ~ onNextClick ~ activeStep",
  //     activeStep
  //   );
  //   const stepsClone = [...steps];
  //   const updatedSteps = stepsClone.map((step) => {
  //     const stepClone = { ...step };
  //     if (step.active) {
  //       console.log("🚀 ~ file: index.tsx:33 ~ updatedSteps ~ step", step);
  //       stepClone.active = false;
  //       stepClone.completed = true;
  //     }
  //     return stepClone;
  //   });
  //   console.log(
  //     "🚀 ~ file: index.tsx:36 ~ updatedSteps ~ updatedSteps",
  //     updatedSteps
  //   );
  //   setSteps(updatedSteps);
  // };

  useEffect(() => {
    () => {
      // clean storage data
    };
  }, []);

  return { steps, activeStep };
};

export default useNewInvoice;
