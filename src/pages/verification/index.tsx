import { VerificationCard } from "features/verification";
import type { NextPageWithLayout } from "types";

const Verification: NextPageWithLayout = () => {
  return (
    <VerificationCard
      title="Verification"
      description="To use our services, We need to verify your account"
    >
      Verification card
    </VerificationCard>
  );
};

Verification.mainLayoutProps = {
  title: "Talents Valley Verification",
  pageDescription: "Verification page description",
};

export default Verification;
