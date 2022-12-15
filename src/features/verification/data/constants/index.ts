import { URL_PATHS } from "data";
import type { VerificationMethodsListType } from "../../types";

export const VERIFICATION_METHODS: VerificationMethodsListType = [
  {
    id: 1,
    title: "Email Address",
    caption: "",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.EMAIL,
  },
  {
    id: 2,
    title: "Phone Number",
    caption: "",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.PHONE,
  },
  {
    id: 3,
    title: "ID Verification",
    caption: "Identity card - Driver license - Passport",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.IDENTITY,
  },
  {
    id: 4,
    title: "Address Verification",
    caption: "Phone, Electricity, Water Bill - Bank statement",
    status: "Not verified",
    url: URL_PATHS.VERIFICATION.ADDRESS,
  },
];
