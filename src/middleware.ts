import { NextResponse, type NextRequest } from "next/server";
import { APP_ROUTES, URL_PATHS, COOKIES_KEYS } from "data";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(COOKIES_KEYS.currentUser);

  if (
    APP_ROUTES.PROTECTED_ROUTES.includes(request.nextUrl.pathname) &&
    !currentUser
  ) {
    request.cookies.delete(COOKIES_KEYS.currentUser);
    const response = NextResponse.redirect(
      new URL(URL_PATHS.AUTH.SIGN_IN, request.url)
    );
    response.cookies.delete(COOKIES_KEYS.currentUser);

    return response;
  }

  if (
    APP_ROUTES.AUTH_ROUTES.includes(request.nextUrl.pathname) &&
    currentUser
  ) {
    return NextResponse.redirect(new URL(URL_PATHS.HOME, request.url));
  }
}
