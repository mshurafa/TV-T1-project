import Button from "../Button";
import { useStepperContext } from "./index";

export const Actions = ({
  nextButtonText = "Next",
}: {
  nextButtonText?: string;
}) => {
  const { activeStep, onChange } = useStepperContext();

  const onBackClick = () => onChange("back");

  const onNextClick = () => onChange("next");

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
        {nextButtonText}
      </Button>
    </div>
  );
};

export default Actions;
