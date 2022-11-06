import { RegistrationCard, CodeVerified } from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const Verified: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <RegistrationCard>
        <CodeVerified />
      </RegistrationCard>
    </NoSsr>
  );
};

Verified.mainLayoutProps = {
  title: "Talents Valley Verified",
  pageDescription: "Verified code page description",
  withoutNavbar: true,
};

export default Verified;
