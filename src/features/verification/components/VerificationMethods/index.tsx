import { Card, Button } from "components";

export const VerificationMethods = () => {
  const classNames = {
    methodCard:
      "flex justify-between items-center my-2 shadow-none bg-gray-light border border-gray-200",
    title: "text-sm",
    caption: "text-xs",
    verified: "text-green-600",
    unverified: "text-red",
  };

  return (
    <>
      <Card className={classNames.methodCard}>
        <div>
          <p className={classNames.title}>Email Address</p>
          <span className={classNames.caption}>
            mail@email.com{" "}
            <span className={classNames.verified}>(Verified)</span>
          </span>
        </div>
        <Button buttonSize="small">Verify</Button>
      </Card>
      <Card className={classNames.methodCard}>
        <div>
          <p className={classNames.title}>Phone Number</p>
          <span className={classNames.caption}>
            +972 ******966{" "}
            <span className={classNames.unverified}>(not verified)</span>
          </span>
        </div>
        <Button buttonSize="small">Verify</Button>
      </Card>
      <span className={classNames.caption}>
        You can complete the 2 following tasks later
      </span>
      <Card className={classNames.methodCard}>
        <div>
          <p className={classNames.title}>ID Verification</p>
          <span className={classNames.caption}>
            Identity card - Driver license - Passport
          </span>
        </div>
        <Button buttonSize="small">Verify</Button>
      </Card>
      <Card className={classNames.methodCard}>
        <div>
          <p className={classNames.title}>Address Verification</p>
          <span className={classNames.caption}>
            Phone, Electricity, Water Bill - Bank statement
          </span>
        </div>
        <Button buttonSize="small">Verify</Button>
      </Card>
      <Button fullWidth className="mt-4">
        Continue
      </Button>
    </>
  );
};

export default VerificationMethods;
