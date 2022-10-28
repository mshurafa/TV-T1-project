import { Card, Logo } from "components";
import type { RegistrationCardType } from "../../types";

export const RegistrationCard: RegistrationCardType = ({
  children,
  className,
  formTitle,
  formCaption,
  ...rest
}) => {
  const cardClassName = `w-full sm:w-[600px] ${className || ""}`;

  return (
    <Card {...rest} className={cardClassName}>
      <Logo className="m-auto" />
      <h1 className="text-2xl font-medium tracking-wider text-center">
        Talents Valley
      </h1>
      <div className="sm:max-w-[500px] m-auto">
        <p className="text-lg my-10">{formTitle}</p>
        {children}
      </div>
      {formCaption && (
        <p className="text-sm text-center my-12">{formCaption}</p>
      )}
    </Card>
  );
};

export default RegistrationCard;
