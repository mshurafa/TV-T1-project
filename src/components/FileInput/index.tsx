import { useMemo } from "react";
import Input from "../Input";
import { ArrowUpTrayIconMini } from "lib/@heroicons";
import type { FileInputType } from "components/types";

export const FileInput: FileInputType = ({
  label = "Upload a File",
  inputSize = "medium",
  children,
  className,
  ...rest
}) => {
  const classNames = useMemo(() => {
    let labelClassName = `mb-0 border border-gray text-black text-center outline-none focus:border-blue hover:bg-gray-light transition-colors rounded-md ${
      className ?? ""
    }`;

    if (inputSize === "large") {
      labelClassName += " py-4 px-5 text-lg";
    } else if (inputSize === "small") {
      labelClassName += " py-2 px-3 text-sm";
    } else {
      labelClassName += " py-3 px-4 text-base";
    }

    return { labelClassName };
  }, [className, inputSize]);

  return (
    <Input
      type="file"
      label={
        <span className="flex justify-center items-center">
          <ArrowUpTrayIconMini className="w-5 h-5 mr-2" />
          {label}
        </span>
      }
      labelClassName={classNames.labelClassName}
      focusableLabel
      inputClassName="hidden"
      className="mb-0"
      {...rest}
    />
  );
};

export default FileInput;
