import { useState } from "react";
import Link from "next/link";
import { Input, Button, HelperText } from "components";
import { ErrorIconMini } from "lib/@heroicons";

export const SignInForm = () => {
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setError((e) => (e ? "" : "Incorrect email or password"));
      }}
    >
      <Input id="email-input" label="Email" placeholder="Enter Email" />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Enter Password"
        withoutHelperText
      />
      <Link
        href="forgot-password"
        className="block text-sm text-gray-dark text-right"
      >
        Forgot Password?
      </Link>
      <HelperText
        showContent={!!error}
        className="text-red w-full justify-center min-h-[20px] mt-2"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error}
      />
      <Button type="submit" className="mt-4">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
