import type { HelperTextType } from "components/types";

export const HelperText: HelperTextType = ({
  children,
  text,
  className,
  startIcon,
  endIcon,
}) => {
  const textClassName = `inline-flex text-sm text-black ${className ?? ""}`;
  const iconClassName = "mx-1";
  return (
    <span className={textClassName}>
      {startIcon && <span className={iconClassName}>{startIcon}</span>}
      {children || text}
      {endIcon && <span className={iconClassName}>{endIcon}</span>}
    </span>
  );
};

export default HelperText;
