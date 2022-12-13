import { useMemo } from "react";
import type { ButtonType } from "components/types";

export const Button: ButtonType = ({
  children,
  className,
  type = "button",
  buttonSize = "medium",
  fullWidth = false,
  ...rest
}) => {
  const classNames = useMemo(() => {
    let buttonClassName = `block bg-blue-light hover:bg-blue transition-colors text-white rounded-md disabled:opacity-50 disabled:hover:bg-blue-light ${
      className ?? ""
    }`;

    if (fullWidth) {
      buttonClassName += " w-full";
    }

    if (buttonSize === "large") {
      buttonClassName += " py-4 px-5 text-lg";
    } else if (buttonSize === "small") {
      buttonClassName += " py-2 px-3 text-sm";
    } else {
      buttonClassName += " py-3 px-4 text-base";
    }

    return { buttonClassName };
  }, [buttonSize, className, fullWidth]);

  return (
    <button className={classNames.buttonClassName} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
