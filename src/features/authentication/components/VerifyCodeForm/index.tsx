import { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button, HelperText } from "components";
import { ErrorIconMini } from "lib/@heroicons";

export const VerifyCodeForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  // pattern="\d*" will prevent submitting the form if the user does not match the pattern which is a digit
  // maxLength={1} to prevent adding more than one character
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setError((e) => (e ? "" : "Incorrect code"));
        router.push("verified");
      }}
    >
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-10 sm:px-6">
        <div className="flex w-44 gap-2.5">
          <Input withoutHelperText autoComplete="nope" />
          <Input withoutHelperText autoComplete="nope" />
          <Input withoutHelperText autoComplete="nope" />
        </div>
        <div className="flex w-44 gap-2.5">
          <Input withoutHelperText autoComplete="nope" />
          <Input withoutHelperText autoComplete="nope" />
          <Input withoutHelperText autoComplete="nope" />
        </div>
      </div>
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
