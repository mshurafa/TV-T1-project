import type { NextRequest } from "next/server";
import { COOKIES_KEYS } from "data";
import { routesMiddleware } from "utils";
import type { CurrentUserType } from "types";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(COOKIES_KEYS.currentUser);
  let currentUserJson: CurrentUserType | null = null;
  if (currentUser) {
    currentUserJson = JSON.parse(currentUser || '""');
  }
  let userDate = currentUserJson?.user;
  const isLoggedIn = !!(
    currentUserJson?.accessToken &&
    currentUserJson.refreshToken &&
    userDate
  );

  return routesMiddleware(request, isLoggedIn);
}
