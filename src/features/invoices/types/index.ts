import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";
// import type { UserType, APIResponseType } from "types";

interface PayInvoiceProps {
  className?: string;
  cardClassName?: string;
}

export type PayInvoiceType = FC<PayInvoiceProps>;

export interface ConfirmDetailsProps {
  onSubmit: (data: ConfirmDetailsInputsType) => void;
}

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

export type PayInvoiceStepType = {
  title: string;
  id: "step1" | "step2" | "step3" | "step4";
  active: boolean;
  completed: boolean;
};

export type PayInvoiceStepsType = PayInvoiceStepType[];

export type PaymentMethodValue = "creditCard" | "paypal" | "bankTransfer";

export type ClientFeesValue = 100 | 50 | 0;

export type PaymentMethodType = {
  id: number;
  label: string;
  caption: string;
  value: PaymentMethodValue;
  icon: string;
};

export type ClientFeesType = Omit<PaymentMethodType, "value"> & {
  value: ClientFeesValue;
};
