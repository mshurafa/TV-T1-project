import { Input } from "components";
import { useOtp } from "../../hooks";
import type { OtpInputType } from "../../types";

export const OtpInput: OtpInputType = ({ onOtpChange }) => {
  const { otpFields, activeInputRef, onChange, onKeyDown, onFocus, onPaste } =
    useOtp(onOtpChange);

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {otpFields.value.map((fieldValue, index) => {
        let inputClassName = "max-w-[38px]";
        if (index === 2) {
          inputClassName += " sm:mr-2";
        } else if (index === 3) {
          inputClassName += " sm:ml-2";
        }

        return (
          <Input
            key={index}
            inputMode="numeric"
            pattern="\d{1}"
            autoComplete="one-time-code"
            maxLength={1}
            value={fieldValue}
            onChange={onChange(index)}
            onKeyDown={onKeyDown(index)}
            onFocus={onFocus}
            onPaste={onPaste}
            ref={otpFields.activeIndex === index ? activeInputRef : null}
            className={inputClassName}
            inputSize="small"
            inputClassName="text-center"
            withoutHelperText
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
