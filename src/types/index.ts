import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { MainLayoutProps } from "layouts";

export type Children = React.ReactNode;

export type ChildrenProp = {
  children: React.ReactNode;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getNestedLayout?: (page: ReactElement) => ReactNode;
  mainLayoutProps?: Omit<MainLayoutProps, "children">;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
