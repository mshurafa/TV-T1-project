import { VerificationCard, VerificationMethods } from "features/verification";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const Verification: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <VerificationCard
        title="Verification"
        description="To use our services, We need to verify your account"
      >
        <VerificationMethods />
      </VerificationCard>
    </NoSsr>
  );
};

Verification.mainLayoutProps = {
  title: "Talents Valley Verification",
  pageDescription: "Verification page description",
};

export default Verification;
