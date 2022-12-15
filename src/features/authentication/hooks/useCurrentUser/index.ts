import { useState, useEffect } from "react";
import { getCookie, setCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import type { UserType } from "types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<UserType | null>(
    getCookie(COOKIES_KEYS.currentUser).user
  );

  const refetchUser = async (userId: string) => {
    // const currentUser = getCookie(COOKIES_KEYS.currentUser);
    // const userInfo = await authService.getMe(userId);
    // if (userInfo && currentUser) {
    //   const newUser = {
    //     ...JSON.parse(currentUser),
    //     username: userInfo.username,
    //     avatar: userInfo.avatar,
    //   };
    //   setCookie(COOKIES_KEYS.currentUser, newUser)
    //   setUser(newUser);
    // }
  };

  return { user, refetchUser };
};

export default useCurrentUser;
