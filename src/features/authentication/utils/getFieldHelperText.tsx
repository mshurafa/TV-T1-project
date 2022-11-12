import { HelperText } from "components";
import { CheckCircleIconMini, ErrorIconMini } from "lib/@heroicons";

export const getFieldHelperText = (
  status: "success" | "error" = "error",
  message?: string
) => {
  let helperTextClassName = "text-red";
  let helperTextIcon = <ErrorIconMini className="w-5 h-5" />;

  if (status === "success") {
    helperTextClassName = ""; // maybe green
    helperTextIcon = <CheckCircleIconMini className="w-5 h-5 text-green-600" />;
  }

  return (
    <HelperText
      showContent={!!message}
      className={helperTextClassName}
      startIcon={helperTextIcon}
      text={message}
    />
  );
};

export default getFieldHelperText;
