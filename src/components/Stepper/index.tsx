import React, { useMemo } from "react";
import Step from "./Step";
import type { StepperType } from "../types";

export const Stepper: StepperType = ({ steps, className, barClassName }) => {
  const classNames = useMemo(() => {
    const classes = {
      // pr-6 same as the width of the bullet
      stepperContainer: `w-11/12 lg:w-2/5 mx-auto pr-6 ${className ?? ""}`,
      stepperProgressBar: `bg-gray-200 h-1 flex items-center justify-between ${
        barClassName ?? ""
      }`,
    };

    return classes;
  }, [className, barClassName]);

  return (
    <div className={classNames.stepperContainer}>
      <div className={classNames.stepperProgressBar}>
        {steps.map((step, index) => {
          const isLastBullet = index === steps.length - 2;
          const isLastStep = index === steps.length - 1;
          const lastStep = steps[steps.length - 1];
          if (isLastStep) return null;

          return (
            <Step
              key={step.id}
              step={step}
              lastStep={lastStep}
              isLastBullet={isLastBullet}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
