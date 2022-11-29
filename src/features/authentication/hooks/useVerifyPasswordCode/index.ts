import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS, LOCAL_STORAGE_KEYS } from "data";
import { setStorageItem, getStorageItem } from "utils";
import type {
  ForgotPasswordFormInputType,
  ForgotPasswordResponseType,
} from "../../types";

export const useVerifyPasswordCode = (mode: "send" | "resend" = "send") => {
  const router = useRouter();
  const emailRef = useRef("");

  const { fetchData, error, loading } = useAxios<
    ForgotPasswordResponseType,
    ForgotPasswordFormInputType
  >({
    config: {
      url: API_SERVICES_URLS.FORGOT_PASSWORD,
      method: "POST",
    },
    options: {
      manual: true,
    },
  });

  useEffect(() => {
    if (mode === "resend") {
      const forgotPasswordData = getStorageItem(
        LOCAL_STORAGE_KEYS.FORGOT_PASSWORD_DATA
      ) as {
        email: string;
        userId: string;
      } | null;
      const email = forgotPasswordData?.email || "";
      emailRef.current = email;
      if (!email) {
        router.replace(URL_PATHS.AUTH.FORGOT_PASSWORD);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const sendCodeRequest = (payload?: { email: string }) => {
    const emailValue = payload?.email || emailRef.current;
    fetchData({ email: emailValue }).then((response) => {
      if (response) {
        setStorageItem(LOCAL_STORAGE_KEYS.FORGOT_PASSWORD_DATA, {
          email: emailValue,
          userId: response.data?._id,
        });
        if (mode === "send") {
          router.push(URL_PATHS.AUTH.VERIFY_CODE);
        }
      }
    });
  };

  return { sendCodeRequest, error, loading };
};

export default useVerifyPasswordCode;
