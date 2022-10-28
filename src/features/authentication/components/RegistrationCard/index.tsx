import { Card, Logo } from "components";
import type { RegistrationCardType } from "../../types";

export const RegistrationCard: RegistrationCardType = ({
  children,
  className,
  formTitle,
  formCaption,
  ...rest
}) => {
  const cardClassName = `w-full sm:w-[703px] font-semibold ${className || ""}`;

  return (
    <Card {...rest} className={cardClassName}>
      <Logo className="m-auto" />
      <h1 className="text-3xl text-center">Talents Valley</h1>
      <div className="sm:max-w-[500px] m-auto">
        <p className="text-2xl mt-[55px] mb-[42px]">{formTitle}</p>
        {children}
      </div>
      {formCaption && (
        <p className="text-base text-center font-normal mt-12 mb-24">
          {formCaption}
        </p>
      )}
    </Card>
  );
};

export default RegistrationCard;
