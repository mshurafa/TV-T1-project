import { RegistrationCard, ForgotPasswordForm } from "features/authentication";
import type { NextPageWithLayout } from "types";

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <RegistrationCard formTitle="Forgot Password?" withBackButton>
      <p className="text-sm text-gray-dark -mt-6 mb-9">
        We&apos;ll send a code to your email to reset your password
      </p>
      <ForgotPasswordForm />
    </RegistrationCard>
  );
};

ForgotPassword.mainLayoutProps = {
  title: "Talents Valley Forgot Password",
  pageDescription: "Forgot password page description",
  withoutNavbar: true,
};

export default ForgotPassword;
