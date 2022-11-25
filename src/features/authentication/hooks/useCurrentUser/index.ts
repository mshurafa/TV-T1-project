import { useRef } from "react";
import Cookies from "js-cookie";
import { COOKIES_KEYS } from "data";
import type { UserType } from "types";

export const useCurrentUser = () => {
  const userRef = useRef<UserType>();

  const currentUser = Cookies.get(COOKIES_KEYS.currentUser);
  if (currentUser) {
    userRef.current = JSON.parse(currentUser)?.user;
  }

  return userRef.current;
};

export default useCurrentUser;
