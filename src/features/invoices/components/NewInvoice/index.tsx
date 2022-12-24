import { useMemo } from "react";
import { Card, Stepper, Button } from "components";
// import ConfirmDetails from "./ConfirmDetails";
// import Preview from "./Preview";
import Confirmation from "./Confirmation";
import { NEW_INVOICE_STEPS } from "../../constants";
import type { NewInvoiceType } from "../../types";

export const NewInvoice: NewInvoiceType = ({
  className,
  cardClassName,
  ...rest
}) => {
  //create custom hook to manage new invoice state
  const classNames = useMemo(() => {
    const classes = {
      mainContent: `flex-1 pt-8 ${className ?? ""}`,
      card: `w-full max-w-[800px] mt-20 mx-auto relative py-8 px-12 ${
        cardClassName || ""
      }`,
    };

    return classes;
  }, [className, cardClassName]);

  return (
    <div className={classNames.mainContent}>
      <Stepper steps={NEW_INVOICE_STEPS} />
      <Card {...rest} className={classNames.card}>
        {/* <ConfirmDetails /> */}
        {/* <Preview /> */}
        <Confirmation />
        <div className="flex gap-4 justify-end">
          <Button
            type="submit"
            buttonSize="small"
            className="max-w-[150px] bg-white text-black border hover:bg-gray-light"
            fullWidth
            onClick={() => {}}
          >
            Back
          </Button>
          <Button
            type="submit"
            buttonSize="small"
            className="max-w-[150px]"
            fullWidth
            onClick={() => {}}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NewInvoice;
