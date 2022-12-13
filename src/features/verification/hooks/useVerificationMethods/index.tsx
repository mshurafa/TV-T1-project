import { useState } from "react";
import { useCurrentUser } from "features/authentication";
import { URL_PATHS } from "data";

export const useVerificationMethods = () => {
  const [canContinue, setCanContinue] = useState(false);
  const user = useCurrentUser();
  console.log("🚀 ~ file: index.tsx:11 ~ useVerificationMethods ~ user", user);

  const verificationMethods = [
    {
      id: 1,
      title: "Email Address",
      caption: "mail@email.com",
      status: "Verified",
      url: URL_PATHS.VERIFICATION.EMAIL,
    },
    {
      id: 2,
      title: "Phone Number",
      caption: "+972 ******966",
      status: "not verified",
      url: URL_PATHS.VERIFICATION.PHONE,
    },
    {
      id: 3,
      title: "ID Verification",
      caption: "Identity card - Driver license - Passport",
      status: "not verified",
      url: URL_PATHS.VERIFICATION.IDENTITY,
    },
    {
      id: 4,
      title: "Address Verification",
      caption: "Phone, Electricity, Water Bill - Bank statement",
      status: "not verified",
      url: URL_PATHS.VERIFICATION.ADDRESS,
    },
  ];

  return { verificationMethods, canContinue };
};

export default useVerificationMethods;
