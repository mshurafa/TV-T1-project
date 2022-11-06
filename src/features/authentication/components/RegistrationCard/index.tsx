import { useRouter } from "next/router";
import { Card, Logo, IconButton } from "components";
import { ChevronLeftIcon } from "lib/@heroicons";
import type { RegistrationCardType } from "../../types";

export const RegistrationCard: RegistrationCardType = ({
  children,
  className,
  formTitle,
  formCaption,
  withBackButton = false,
  ...rest
}) => {
  const router = useRouter();
  const cardClassName = `w-full sm:w-[600px] relative ${className || ""}`;

  return (
    <Card {...rest} className={cardClassName}>
      {withBackButton && (
        <IconButton
          onClick={() => router.back()}
          className="absolute top-10 sm:left-14"
          buttonSize="large"
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      <Logo className="m-auto" />
      <h1 className="text-2xl font-medium tracking-wider text-center">
        Talents Valley
      </h1>
      <div className="max-w-[450px] m-auto">
        {formTitle && <h6 className="text-lg my-10">{formTitle}</h6>}
        {children}
      </div>
      {formCaption && (
        <p className="text-sm text-center my-12">{formCaption}</p>
      )}
    </Card>
  );
};

export default RegistrationCard;
