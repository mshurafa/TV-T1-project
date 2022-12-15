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
  const [otpError, setOtpError] = useState("");
  const router = useRouter();
  const { user } = useCurrentUser();
  const { sendCodeRequest, loading: emailCodeLoading } = useEmailCode();
  const {
    fetchData: verifyCode,
    error,
    loading,
    clearError,
  } = useAxios<VerifyEmailResponseType, VerifyEmailFormPayloadType>({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.EMAIL,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: () => router.push(URL_PATHS.VERIFICATION.INDEX),
  });

  if (user?.verifiedEmail) {
    return (
      <p className="text-xl text-center">Your email is already verified.</p>
    );
  }

  const otpChangeHandler = (value: string) => {
    setOtpCode(value);
    setOtpError("");
    clearError();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    if (!otpCode || otpCode.length !== 6) {
      setOtpError("Please write the code to continue.");
      return;
    }
    verifyCode({ verificationCode: otpCode });
  };

  return (
    <>
      <p className="text-sm text-gray-dark mb-4">
        {`We have sent you a verification code to your email ${user?.email}`}
      </p>
      <form onSubmit={onSubmit}>
        <OtpInput
          onOtpChange={otpChangeHandler}
          error={!!error || !!otpError}
        />
        <HelperText
          showContent={!!error || !!otpError}
          className="text-red w-full text-xs justify-center min-h-[20px]"
          startIcon={<ErrorIconMini className="w-5 h5" />}
          text={error?.message || otpError}
        />
        <Button type="submit" buttonSize="small" fullWidth>
          {loading ? "Loading.." : "Continue"}
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
