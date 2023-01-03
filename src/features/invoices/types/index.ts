import type { FC } from "react";
import type { StepperOnChangeType } from "components/types";
import type { APIResponseType, Children } from "types";

interface PayInvoiceProps {
  className?: string;
  cardClassName?: string;
}

export type PayInvoiceType = FC<PayInvoiceProps>;

export interface ConfirmDetailsProps {
  onSubmit: () => void;
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

export interface PayInvoiceStateProps {
  children: Children;
}

export type PayInvoiceStateType = FC<PayInvoiceStateProps>;

export type PayInvoiceContextType = {
  invoiceId: string | undefined;
  stepsData: {
    steps: PayInvoiceStepsType;
    activeStepIndex: number;
    stepContent: JSX.Element;
    currentStep: PayInvoiceStepType;
    nextStep: PayInvoiceStepType | undefined;
    previousStep: PayInvoiceStepType | undefined;
    isLastStep: boolean;
    nextButtonText: string;
  };
  onStepperChange: StepperOnChangeType;
};

export type ClientType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    country: string;
    city: string;
    state: string;
    zipCode: string;
  };
};

export type FreelancerType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type InvoiceItemType = {
  _id: string;
  itemName: string;
  description: string;
  price: number;
};

export type InvoiceType = {
  _id: string;
  client: ClientType;
  fixed: InvoiceItemType[];
  freelancer?: FreelancerType;
  subTotal: number;
  hashCode: string;
  status: "unpaid" | "paid";
};

export type InvoiceDetailsData = {
  invoice: InvoiceType;
  type: "invoice" | "service";
};

export type InvoiceDetailsResponse = APIResponseType<InvoiceDetailsData>;

interface InvoiceDetailsProps {
  details?: InvoiceType;
  loading: boolean;
}

export type InvoiceDetailsType = FC<InvoiceDetailsProps>;
