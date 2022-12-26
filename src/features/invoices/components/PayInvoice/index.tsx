import { useMemo } from "react";
import { Stepper } from "components";
import { usePayInvoice } from "../../hooks";
import type { PayInvoiceType } from "../../types";

export const PayInvoice: PayInvoiceType = ({ className, cardClassName }) => {
  const { steps, activeStep, stepContent, onStepperChange } = usePayInvoice();

  const classNames = useMemo(() => {
    const classes = {
      mainContent: `flex-1 ${className ?? ""}`,
      card: `w-full max-w-[800px] mx-auto relative py-8 px-12 ${
        cardClassName || ""
      }`,
    };

    return classes;
  }, [className, cardClassName]);

  return (
    <div className={classNames.mainContent}>
      <Stepper steps={steps} activeStep={activeStep} onChange={onStepperChange}>
        <Stepper.ProgressBar className="mt-6 mb-20" />
        <Stepper.Content className={classNames.card}>
          {stepContent}
          <Stepper.Actions />
        </Stepper.Content>
      </Stepper>
    </div>
  );
};

export default PayInvoice;
