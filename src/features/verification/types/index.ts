import type { FC, ReactNode } from "react";
import type { CardProps } from "components/types";
// import type { UserType, APIResponseType } from "types";

interface VerificationCardProps extends CardProps {
  title: string;
  description?: string;
  caption?: ReactNode;
  icon?: ReactNode;
}
export type VerificationCardType = FC<VerificationCardProps>;
