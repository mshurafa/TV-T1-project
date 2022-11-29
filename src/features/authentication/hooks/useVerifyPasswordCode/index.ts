import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import type {
  ForgotPasswordFormInputType,
  ForgotPasswordResponseType,
} from "../../types";

export const useVerifyPasswordCode = (mode: "send" | "resend" = "send") => {
  const router = useRouter();
  const forgotPasswordData = router.query.forgotPasswordData;
  const emailQuery = forgotPasswordData?.[0] || "";

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
      if (!emailQuery) {
        router.replace(URL_PATHS.AUTH.FORGOT_PASSWORD);
      }
    }
  }, [emailQuery, mode, router]);

  const sendCodeRequest = (payload?: { email: string }) => {
    const emailValue = payload?.email || emailQuery;
    fetchData({ email: emailValue }).then((response) => {
      if (response && mode === "send") {
        router.push(
          {
            pathname: URL_PATHS.AUTH.VERIFY_CODE,
            query: {
              forgotPasswordData: [emailValue, response.data?._id || ""],
            },
          },
          URL_PATHS.AUTH.VERIFY_CODE
        );
      }
    });
  };

  return { sendCodeRequest, error, loading };
};

export default useVerifyPasswordCode;
