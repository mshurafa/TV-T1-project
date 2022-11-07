import { useMemo } from "react";
import ReactPhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import type { PhoneInputType } from "components/types";

export const PhoneInput: PhoneInputType = ({
  label,
  id,
  helperText,
  className,
  inputClassName,
  inputSize = "medium",
  error = false,
  withoutHelperText = false,
  ...rest
}) => {
  const classNames = useMemo(() => {
    const classes = {
      inputContainer: `mb-2 relative text-gray-dark ${className ?? ""}`,
      label: "block mb-2",
      input: `block w-full px-4 border-gray focus:ring-0 focus:border-blue rounded-md ${
        inputClassName || ""
      }`,
      helperText: "inline-flex min-h-[20px] text-sm mt-1",
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

    if (error) {
      classes.input += " border-red focus:border-red";
    }

    return classes;
  }, [className, inputClassName, inputSize, error]);

  return (
    <div className={classNames.inputContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      <ReactPhoneInput
        inputProps={{
          id: id,
        }}
        specialLabel=""
        inputClass={classNames.input}
        // country={"us"}
        {...rest}
      />
      {!withoutHelperText && (
        <p className={classNames.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default PhoneInput;
