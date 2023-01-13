import Button from "../Button";
import { useStepperContext } from "./index";
import type { StepperActionsType } from "../types";

export const Actions: StepperActionsType = ({ nextProps, backProps }) => {
  const { steps, activeStep, onChange } = useStepperContext();
  const isLastStep = steps.length - 1 === activeStep;

  const onBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChange("back");
    backProps?.onClick?.(event);
  };

  const onNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChange("next");
    nextProps?.onClick?.(event);
  };

  return (
    <div className="flex gap-4 justify-end">
      {activeStep > 0 && (
        <Button
          buttonSize="small"
          className="max-w-[150px] bg-white text-black border hover:bg-gray-light"
          fullWidth
          {...backProps}
          onClick={onBackClick}
        >
          {backProps?.children || "Back"}
        </Button>
      )}
      {!isLastStep && (
        <Button
          buttonSize="small"
          className="max-w-[150px] border"
          fullWidth
          {...nextProps}
          onClick={onNextClick}
        >
          {nextProps?.children || "Next"}
        </Button>
      )}
    </div>
  );
};

export default Actions;
