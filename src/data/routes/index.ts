export const URL_PATHS = {
  HOME: "/",
  AUTH: {
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    FORGOT_PASSWORD: "/forgot-password",
    VERIFY_CODE: "/forgot-password/verify-code",
    NEW_PASSWORD: "/forgot-password/new-password",
  },
  INVOICES: {
    INDEX: "/invoices",
    CREATE: "invoices/new",
  },
} as const;

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
