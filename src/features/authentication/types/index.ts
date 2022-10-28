import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";

interface RegistrationCardProps extends CardProps {
  formTitle: string;
  formCaption?: ReactNode;
}
export type RegistrationCardType = FC<RegistrationCardProps>;
