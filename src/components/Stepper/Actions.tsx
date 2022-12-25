import Button from "../Button";
import { useStepperContext } from "./index";

export const Actions = () => {
  const { steps, activeStep, onChange } = useStepperContext();

  const onBackClick = () => onChange("back", steps, activeStep);

  const onNextClick = () => onChange("next", steps, activeStep);

  return (
    <div className="flex gap-4 justify-end">
      {activeStep > 0 && (
        <Button
          buttonSize="small"
          className="max-w-[150px] bg-white text-black border hover:bg-gray-light"
          fullWidth
          onClick={onBackClick}
        >
          Back
        </Button>
      )}
      <Button
        buttonSize="small"
        className="max-w-[150px] border"
        fullWidth
        onClick={onNextClick}
      >
        Next
      </Button>
    </div>
  );
};

export default Actions;
