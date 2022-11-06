import { RegistrationCard, VerifyCodeForm } from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const VerifyCode: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <RegistrationCard
        formTitle="Check Your Email"
        formCaption={
          <>
            Didn&apos;t get the code?{" "}
            <a href="#" className="text-blue-light">
              Resend
            </a>
          </>
        }
        withBackButton
      >
        <p className="text-sm text-gray-dark -mt-6 mb-9">
          We have sent you an email that contains a code to reset your password
        </p>
        <VerifyCodeForm />
      </RegistrationCard>
    </NoSsr>
  );
};

VerifyCode.mainLayoutProps = {
  title: "Talents Valley Verify Code",
  pageDescription: "Verify code page description",
  withoutNavbar: true,
};

export default VerifyCode;
