import { NextResponse, type NextRequest } from "next/server";
import { APP_ROUTES, URL_PATHS, COOKIES_KEYS } from "data";

export const routesMiddleware = (request: NextRequest, isLoggedIn: boolean) => {
  if (
    APP_ROUTES.PROTECTED_ROUTES.includes(request.nextUrl.pathname) &&
    !isLoggedIn
  ) {
    request.cookies.delete(COOKIES_KEYS.currentUser);
    const response = NextResponse.redirect(
      new URL(URL_PATHS.AUTH.SIGN_IN, request.url)
    );
    response.cookies.delete(COOKIES_KEYS.currentUser);

    return response;
  }

  if (APP_ROUTES.AUTH_ROUTES.includes(request.nextUrl.pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL(URL_PATHS.HOME, request.url));
  }
};

export default routesMiddleware;
