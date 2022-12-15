import { useRef } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "features/authentication";
import { VERIFICATION_METHODS } from "../../data";
import { useEmailCode, useMobileCode } from "../../hooks";
import type { VerificationMethodsUrlType } from "../../types";

export const useVerificationMethods = () => {
  let { current: canContinue } = useRef(false);
  let { current: verificationMethods } = useRef([...VERIFICATION_METHODS]);
  const router = useRouter();
  const user = useCurrentUser();

  const { sendCodeRequest: sendEmailCodeRequest, loading: emailLoading } =
    useEmailCode();
  const { sendCodeRequest: sendMobileCodeRequest, loading: mobileLoading } =
    useMobileCode();

  if (user) {
    const [email, mobile, identity, address] = verificationMethods;

    email.status = user.verifiedEmail ? "Verified" : "Not verified";
    mobile.status = user.verifiedMobile ? "Verified" : "Not verified";
    identity.status =
      user?.verifiedId.status === "not_uploaded" ? "Not verified" : "Verified";
    address.status =
      user?.verifiedAddress.status === "not_uploaded"
        ? "Not verified"
        : "Verified";

    const formattedMobile =
      user.mobile.slice(0, 4) +
      user.mobile.slice(4, -3).replaceAll(/\d/g, "*") +
      user.mobile.slice(-3);

    email.caption = user.email;
    mobile.caption = formattedMobile;

    email.loading = emailLoading;
    mobile.loading = mobileLoading;

    canContinue = email.status === "Verified" && mobile.status === "Verified";
  }

  const onMethodClick = (url: VerificationMethodsUrlType) => {
    console.log("🚀 ~ file: index.tsx:41 ~ onMethodClick ~ url", url);
    if (url === "/verification/email") {
      sendEmailCodeRequest();
    } else if (url === "/verification/phone") {
      sendMobileCodeRequest();
    } else {
      router.push(url);
    }
  };

  return { verificationMethods, onMethodClick, canContinue };
};

export default useVerificationMethods;
