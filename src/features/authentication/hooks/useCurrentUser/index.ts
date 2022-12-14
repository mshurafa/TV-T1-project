import { useRef } from "react";
import { getCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import type { UserType } from "types";

export const useCurrentUser = () => {
  const userRef = useRef<UserType>();

  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  if (currentUser) {
    userRef.current = currentUser?.user;
  }

  return userRef.current;
};

export default useCurrentUser;
