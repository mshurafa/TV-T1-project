import { useRouter } from "next/router";
import { VerificationCard, VerifyAddressForm } from "features/verification";
import { useCurrentUser } from "features/authentication";
import { NoSsr } from "components";
import { URL_PATHS } from "data";
import type { NextPageWithLayout } from "types";

const AddressVerification: NextPageWithLayout = () => {
  const router = useRouter();
  const { user, updateUser } = useCurrentUser();

  const onVerify = () => {
    if (user) {
      updateUser({
        ...user,
        verifiedAddress: {
          ...user.verifiedAddress,
          status: "pending",
        },
      });
      router.push(URL_PATHS.VERIFICATION.INDEX);
    }
  };

  return (
    <NoSsr>
      <VerificationCard
        title="Address Verification"
        imgSrc="/assets/img/address.png"
        description="Upload Document That Proof Your Address Such As: Bill Phone, Electricity, Water, Bank Statement"
      >
        <VerifyAddressForm onVerify={onVerify} />
      </VerificationCard>
    </NoSsr>
  );
};

AddressVerification.mainLayoutProps = {
  title: "Talents Valley Address Verification",
  pageDescription: "Address verification page description",
};

export default AddressVerification;
