import type { ButtonType } from "components/types";

export const Button: ButtonType = ({
  children,
  className,
  type = "button",
  ...rest
}) => {
  const buttonClassName = `block w-full text-2xl bg-blue-light text-white rounded-md p-3 ${
    className ?? ""
  }`;

  return (
    <button className={buttonClassName} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
