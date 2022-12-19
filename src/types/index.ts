import type { ReactElement, ReactNode, HTMLProps } from "react";
import type { NextPage } from "next";
import type { MainLayoutProps } from "layouts";

export type Children = ReactNode;

export type ChildrenProp = {
  children: ReactNode;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getNestedLayout?: (page: ReactElement) => ReactNode;
  mainLayoutProps?: Omit<MainLayoutProps, "children">;
};

export type DivElementType = HTMLProps<HTMLDivElement>;

export type APIResponseType<DataType = any> = {
  statusCode: number;
  status: "success" | "failed";
  message: string;
  data: null | DataType;
};

export type ErrorType = APIResponseType<null> & {
  status: "failed";
};

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  balance: number;
  verifiedEmail: boolean;
  verifiedMobile: boolean;
  verifiedAddress: {
    disapproveReason: {};
    status: "not_uploaded" | "pending";
  };
  verifiedId: {
    disapproveReason: {};
    status: "not_uploaded" | "pending";
  };
  role: number;
  address: {
    country: string;
  };
  isBlocked: boolean;
};
