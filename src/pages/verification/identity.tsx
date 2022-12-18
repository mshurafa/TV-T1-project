import { VerificationCard, VerifyIdentityForm } from "features/verification";
import { useCurrentUser } from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const IdentityVerification: NextPageWithLayout = () => {
  const { user, updateUser } = useCurrentUser();

  const onVerify = () => {
    if (user) {
      updateUser({
        ...user,
        verifiedId: {
          ...user.verifiedId,
          status: "pending",
        },
      });
    }
  };

  return (
    <NoSsr>
      <VerificationCard
        title="ID Verification"
        imgSrc="/assets/img/identity.png"
        description="Upload Document that Proof your Identity such as: Identity Card, Passport, Driver License"
      >
        <VerifyIdentityForm onVerify={onVerify} />
      </VerificationCard>
    </NoSsr>
  );
};

IdentityVerification.mainLayoutProps = {
  title: "Talents Valley Identity Verification",
  pageDescription: "Identity verification page description",
};

export default IdentityVerification;
