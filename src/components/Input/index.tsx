import { useMemo } from "react";
import usePasswordInput from "./usePasswordInput";
import type { InputType } from "components/types";

export const Input: InputType = ({
  label,
  id,
  helperText,
  className,
  inputClassName,
  startIcon,
  endIcon,
  inputSize = "medium",
  type = "text",
  ...rest
}) => {
  const { passwordInputType, passwordInputIcon } = usePasswordInput();
  const classNames = useMemo(() => {
    const classes = {
      inputContainer: `mb-2 relative text-gray-dark ${className ?? ""}`,
      label: "block mb-2",
      icon: "absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
      startIcon: "left-4",
      endIcon: "right-4",
      input: `block w-full px-4 border-gray focus:ring-0 focus:border-blue rounded-md ${
        inputClassName || ""
      }`,
      helperText: "text-sm mt-1",
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

  const inputType = type === "password" ? passwordInputType : type;
  const inputEndIcon = type === "password" ? passwordInputIcon : endIcon;

  return (
    <div className={classNames.inputContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <span className={`${classNames.icon} ${classNames.startIcon}`}>
            {startIcon}
          </span>
        )}
        <input
          id={id}
          type={inputType}
          className={classNames.input}
          {...rest}
        />
        {inputEndIcon && (
          <span className={`${classNames.icon} ${classNames.endIcon}`}>
            {inputEndIcon}
          </span>
        )}
      </div>
      {helperText && <p className={classNames.helperText}>{helperText}</p>}
    </div>
  );
};

export default Input;
