import { useMemo } from "react";
import { Stepper } from "components";
import ConfirmDetails from "./ConfirmDetails";
import Preview from "./Preview";
import Confirmation from "./Confirmation";
import { useNewInvoice } from "../../hooks";
import type { NewInvoiceType } from "../../types";

export const NewInvoice: NewInvoiceType = ({ className, cardClassName }) => {
  const { steps, activeStep } = useNewInvoice();

  const classNames = useMemo(() => {
    const classes = {
      mainContent: `flex-1 ${className ?? ""}`,
      card: `w-full max-w-[800px] mx-auto relative py-8 px-12 ${
        cardClassName || ""
      }`,
    };

    return classes;
  }, [className, cardClassName]);

  const stepsContent = [
    <ConfirmDetails key="confirm-details" />,
    <Preview key="preview" />,
    <div key="payment">Payment</div>,
    <Confirmation key="confirmation" />,
  ];

  return (
    <div className={classNames.mainContent}>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        onChange={(stepKey) => {
          console.log("🚀 ~ file: index.tsx:68 ~ stepKey", stepKey);
        }}
      >
        <Stepper.ProgressBar className="mt-6 mb-20" />
        <Stepper.Content className={classNames.card}>
          {stepsContent[activeStep]}
          <Stepper.Actions />
        </Stepper.Content>
      </Stepper>
    </div>
  );
};

export default NewInvoice;
