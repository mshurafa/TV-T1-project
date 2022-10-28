import { useMemo } from "react";
import type { InputType } from "components/types";

export const Input: InputType = ({
  label,
  id,
  helperText,
  size,
  className,
  inputClassName,
  startIcon,
  ...rest
}) => {
  const classNames = useMemo(
    () => ({
      inputContainer: `mb-2 relative ${className ?? ""}`,
      label: "block mb-2 text-lg text-gray-dark",
      startIcon: "absolute left-3 top-1/2 -translate-y-2/4",
      input: `block w-full px-4 py-[19px] text-base leading-5 font-normal text-gray-dark outline-none border border-gray focus:border-blue rounded-lg ${
        inputClassName || ""
      }`,
      helperText: "text-sm text-gray-500",
    }),
    [className, inputClassName]
  );

  return (
    <div className={classNames.inputContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      {startIcon && <span className={classNames.startIcon}>{startIcon}</span>}
      <input id={id} className={classNames.input} {...rest} />
      {helperText && <p className={classNames.helperText}>{helperText}</p>}
    </div>
  );
};

export default Input;
