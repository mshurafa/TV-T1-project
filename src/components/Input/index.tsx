import { useMemo } from "react";
import type { InputType } from "components/types";

export const Input: InputType = ({
  label,
  id,
  helperText,
  className,
  inputClassName,
  startIcon,
  inputSize = "medium",
  type = "text",
  ...rest
}) => {
  const classNames = useMemo(() => {
    const classes = {
      inputContainer: `mb-2 relative ${className ?? ""}`,
      label: "block mb-2 text-gray-dark",
      startIcon: "absolute left-3 top-1/2 -translate-y-2/4",
      input: `block w-full px-4 text-gray-dark border-gray focus:ring-0 focus:border-blue rounded-md ${
        inputClassName || ""
      }`,
      helperText: "text-sm text-gray-500",
    };

    if (inputSize === "large") {
      classes.input += " py-4";
      classes.inputContainer += " text-lg";
    } else if (inputSize === "small") {
      classes.input += " py-2";
      classes.inputContainer += " text-base";
    } else {
      classes.input += " py-3";
      classes.inputContainer += " text-base";
    }

    return classes;
  }, [className, inputClassName, inputSize]);

  return (
    <div className={classNames.inputContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      {startIcon && <span className={classNames.startIcon}>{startIcon}</span>}
      <input id={id} type={type} className={classNames.input} {...rest} />
      {helperText && <p className={classNames.helperText}>{helperText}</p>}
    </div>
  );
};

export default Input;
