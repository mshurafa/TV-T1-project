import type { HelperTextType } from "components/types";

export const HelperText: HelperTextType = ({
  children,
  text,
  className,
  startIcon,
  endIcon,
  showContent = true,
}) => {
  const textClassName = `inline-flex items-center text-black ${
    className ?? ""
  }`;
  const iconClassName = "mx-1";
  return (
    <span className={textClassName}>
      {showContent ? (
        <>
          {startIcon && <span className={iconClassName}>{startIcon}</span>}
          {children || text}
          {endIcon && <span className={iconClassName}>{endIcon}</span>}
        </>
      ) : null}
    </span>
  );
};

export default HelperText;
