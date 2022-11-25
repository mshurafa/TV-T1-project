import { URL_PATHS } from "../constants";

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const APP_ROUTES: {
  readonly PROTECTED_ROUTES: readonly string[];
  readonly PUBLIC_ROUTES: readonly string[];
  readonly AUTH_ROUTES: readonly string[];
} = {
  PROTECTED_ROUTES: [URL_PATHS.HOME],
  PUBLIC_ROUTES: [],
  AUTH_ROUTES: [
    URL_PATHS.AUTH.SIGN_IN,
    URL_PATHS.AUTH.SIGN_UP,
    URL_PATHS.AUTH.FORGOT_PASSWORD,
  ],
};
