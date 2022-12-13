import { Fragment } from "react";
import { useRouter } from "next/router";
import { Card, Button } from "components";
import { useVerificationMethods } from "../../hooks";

export const VerificationMethods = () => {
  const router = useRouter();
  const { verificationMethods, canContinue } = useVerificationMethods();

  const classNames = {
    methodCard:
      "flex justify-between items-center my-2 shadow-none bg-gray-light border border-gray-200",
    title: "text-sm",
    caption: "text-xs",
    verified: "text-xs text-green-600",
    unverified: "text-xs text-red",
  };

  const methods = verificationMethods.map((method) => {
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
        <Button buttonSize="small" onClick={() => router.push(method.url)}>
          Verify
        </Button>
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
        onClick={() => {
          //push to the next page
        }}
      >
        Continue
      </Button>
    </>
  );
};

export default VerificationMethods;
