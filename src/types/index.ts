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
