import { useRef } from "react";
import { useCurrentUser } from "features/authentication";
import { VERIFICATION_METHODS } from "../../data";

export const useVerificationMethods = () => {
  let { current: canContinue } = useRef(false);
  let { current: verificationMethods } = useRef([...VERIFICATION_METHODS]);
  const user = useCurrentUser();

  if (user) {
    verificationMethods[0].status = user.verifiedEmail
      ? "Verified"
      : "Not verified";
    verificationMethods[1].status = user.verifiedMobile
      ? "Verified"
      : "Not verified";
    verificationMethods[2].status =
      user?.verifiedId.status === "not_uploaded" ? "Not verified" : "Verified";
    verificationMethods[3].status =
      user?.verifiedAddress.status === "not_uploaded"
        ? "Not verified"
        : "Verified";

    const formattedMobile =
      user.mobile.slice(0, 4) +
      user.mobile.slice(4, -3).replaceAll(/\d/g, "*") +
      user.mobile.slice(-3);

    verificationMethods[0].caption = user.email;
    verificationMethods[1].caption = formattedMobile;

    canContinue =
      verificationMethods[0].status === "Verified" &&
      verificationMethods[1].status === "Verified";
  }

  return { verificationMethods, canContinue };
};

export default useVerificationMethods;
