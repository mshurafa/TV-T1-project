import { useState } from "react";
import { useRouter } from "next/router";
import { Button, HelperText } from "components";
import OtpInput from "../OtpInput";
import { ErrorIconMini } from "lib/@heroicons";

export const VerifyCodeForm = () => {
  const [otpCode, setOtpCode] = useState("");
  console.log(
    "🚀 ~ file: index.tsx ~ line 9 ~ VerifyCodeForm ~ otpCode",
    otpCode
  );
  const [error, setError] = useState("");
  const router = useRouter();

  const otpChangeHandler = (value: string) => setOtpCode(value);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setError((e) => (e ? "" : "Incorrect code"));
        router.push("verified");
      }}
    >
      <OtpInput onOtpChange={otpChangeHandler} />
      <HelperText
        showContent={!!error}
        className="text-red w-full justify-center min-h-[20px] mt-2"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error}
      />
      <Button type="submit" className="mt-4">
        Continue
      </Button>
    </form>
  );
};

export default VerifyCodeForm;
