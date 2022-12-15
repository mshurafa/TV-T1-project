import { VerificationCard, VerifyEmailForm } from "features/verification";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const EmailVerification: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <VerificationCard
        title="Email Verification"
        imgSrc="/assets/img/email.png"
      >
        <VerifyEmailForm />
      </VerificationCard>
    </NoSsr>
  );
};

EmailVerification.mainLayoutProps = {
  title: "Talents Valley Email Verification",
  pageDescription: "Email verification page description",
};

export default EmailVerification;
