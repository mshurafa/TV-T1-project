import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";
// import type { UserType, APIResponseType } from "types";

interface NewInvoiceProps {
  className?: string;
  cardClassName?: string;
}

export type NewInvoiceType = FC<NewInvoiceProps>;

interface ConfirmDetailsProps {
  onNextClick: () => void;
}

export type ConfirmDetailsType = FC<ConfirmDetailsProps>;

export type ConfirmDetailsInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};
