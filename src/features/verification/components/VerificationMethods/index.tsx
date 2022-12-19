import { Fragment } from "react";
import { Card, Button, Image } from "components";
import { useVerificationMethods } from "../../hooks";

export const VerificationMethods = () => {
  const { verificationMethods, onMethodClick, canContinue, onContinue } =
    useVerificationMethods();

  const classNames = {
    methodCard:
      "flex justify-between items-center my-2 shadow-none bg-gray-light border border-gray-200",
    title: "text-sm",
    caption: "text-xs",
    verified: "text-xs text-green-600",
    unverified: "text-xs text-red",
  };

  const methods = verificationMethods.map((method) => {
    const buttonText = method.loading ? "Loading.." : "Verify";
    const isPending = method.status === "Pending";
    const buttonClassName = isPending
      ? "bg-gray-400 disabled:hover:bg-gray-400 min-w-[77px]"
      : "min-w-[77px]";
    const methodCard = (
      <Card key={method.id} className={classNames.methodCard}>
        <div>
          <p className={classNames.title}>
            {method.title}{" "}
            <span
              className={
                method.status === "Verified"
                  ? classNames.verified
                  : classNames.unverified
              }
            >
              ({method.status})
            </span>
          </p>
          <span className={classNames.caption}>{method.caption}</span>
        </div>
        {method.status === "Verified" ? (
          <Image
            alt={`${method.title} ${method.status}`}
            src="/assets/img/check-mark.png"
            width={36}
            height={36}
          />
        ) : (
          <Button
            buttonSize="small"
            className={buttonClassName}
            disabled={isPending}
            onClick={() => onMethodClick(method.url)}
          >
            {isPending ? method.status : buttonText}
          </Button>
        )}
      </Card>
    );

    if (method.id === 3) {
      return (
        <Fragment key={method.id}>
          <span className={classNames.caption}>
            You can complete the 2 following tasks later
          </span>
          {methodCard}
        </Fragment>
      );
    } else {
      return methodCard;
    }
  });

  return (
    <>
      {methods}
      <Button
        fullWidth
        className="mt-4"
        disabled={!canContinue}
        onClick={onContinue}
      >
        Continue
      </Button>
    </>
  );
};

export default VerificationMethods;
