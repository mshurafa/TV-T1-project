import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";

interface RegistrationCardProps extends CardProps {
  formTitle?: string;
  formCaption?: ReactNode;
  withBackButton?: boolean;
}
export type RegistrationCardType = FC<RegistrationCardProps>;

export type SignInFormInputsType = {
  email: string;
  password: string;
};

export type SignUpFormInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
};
