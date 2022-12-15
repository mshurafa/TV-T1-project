import { useState } from "react";
import { useRouter } from "next/router";
import { Button, HelperText, OtpInput } from "components";
import { useCurrentUser } from "features/authentication";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { useEmailCode } from "../../hooks";
import type {
  VerifyEmailFormPayloadType,
  VerifyEmailResponseType,
} from "../../types";

export const VerifyEmailForm = () => {
  const [otpCode, setOtpCode] = useState("");
  const router = useRouter();
  const { user } = useCurrentUser();
  const { sendCodeRequest, loading: emailCodeLoading } = useEmailCode();
  const {
    fetchData: verifyCode,
    error,
    loading,
  } = useAxios<VerifyEmailResponseType, VerifyEmailFormPayloadType>({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.EMAIL,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      // push back to /verification and update user data
      console.log("🚀 ~ file: index.tsx:40 ~ VerifyEmailForm ~ data", data);
      //   router.push(URL_PATHS.VERIFICATION.INDEX)
    },
  });

  if (user?.verifiedEmail) {
    return (
      <p className="text-sm text-center text-gray-dark">
        Your email has been verified
      </p>
    );
  }

  const otpChangeHandler = (value: string) => setOtpCode(value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    verifyCode({ verificationCode: otpCode });
  };

  return (
    <>
      <p className="text-sm text-gray-dark mb-4">
        {`We have sent you a verification code to your email ${user?.email}`}
      </p>
      <form onSubmit={onSubmit}>
        <OtpInput onOtpChange={otpChangeHandler} />
        <HelperText
          showContent={!!error}
          className="text-red w-full text-xs justify-center min-h-[20px]"
          startIcon={<ErrorIconMini className="w-5 h5" />}
          text={error?.message}
        />
        <Button type="submit" buttonSize="small" fullWidth>
          Continue
        </Button>
      </form>
      <p className="text-sm text-center mt-8">
        Didn&apos;t get the code?{" "}
        <a
          onClick={() => sendCodeRequest()}
          className="text-blue-light cursor-pointer"
        >
          {emailCodeLoading ? "Loading..." : "Resend"}
        </a>
      </p>
    </>
  );
};

export default VerifyEmailForm;
