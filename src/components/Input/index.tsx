import type { InputType } from "components/types";

const Input: InputType = ({
  label,
  placeholder,
  id,
  helperText,
  size,
  className,
  inputClassName,
  startIcon,
  ...rest
}) => {
  return (
    <div className={`mb-2 relative ${className || ""}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-lg text-gray-dark">
          {label}
        </label>
      )}
      {startIcon && (
        <span className="absolute left-3 top-1/2 -translate-y-2/4">
          {startIcon}
        </span>
      )}
      <input
        id={id}
        placeholder={placeholder}
        className={`block w-full px-4 py-[19px] text-base leading-5 font-normal text-gray-dark outline-none border border-gray focus:border-blue rounded-lg ${
          inputClassName || ""
        }`}
        {...rest}
      />
      <p className="text-sm text-gray-500">{helperText}</p>
    </div>
  );
};

export default Input;
