import { RegistrationCard, NewPasswordForm } from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const NewPassword: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <RegistrationCard formTitle="Create New Password" withBackButton>
        <NewPasswordForm />
      </RegistrationCard>
    </NoSsr>
  );
};

NewPassword.mainLayoutProps = {
  title: "Talents Valley New Password",
  pageDescription: "New password page description",
  withoutNavbar: true,
};

export default NewPassword;
