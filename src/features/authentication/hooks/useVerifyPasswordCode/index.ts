import { useRouter } from "next/router";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS, LOCAL_STORAGE_KEYS } from "data";
import { setStorageItem } from "utils";
import type {
  ForgotPasswordFormInputType,
  ForgotPasswordResponseType,
} from "../../types";

export const useVerifyPasswordCode = () => {
  const router = useRouter();

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
    onSuccess: () => {
      router.push(URL_PATHS.AUTH.VERIFY_CODE);
    },
  });

  const sendCodeRequest = ({ email }: { email: string }) => {
    fetchData({ email }).then((response) => {
      if (response) {
        setStorageItem(LOCAL_STORAGE_KEYS.EMAIL, email);
      }
    });
  };

  return { sendCodeRequest, error, loading };
};

export default useVerifyPasswordCode;
