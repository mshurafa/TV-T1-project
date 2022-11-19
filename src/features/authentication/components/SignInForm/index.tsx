import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Input, Button, HelperText } from "components";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type { SignInFormInputsType, SignInResponseType } from "../../types";

export const SignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputsType>();
  const {
    fetchData: signIn,
    data,
    error,
    loading,
  } = useAxios<SignInResponseType, SignInFormInputsType>({
    config: {
      url: API_SERVICES_URLS.SIGN_IN,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: () => router.push(URL_PATHS.HOME),
  });

  const onSubmit = handleSubmit(signIn);

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        {...register("email", formValidation.email)}
        error={!!errors.email}
        helperText={getFieldHelperText("error", errors.email?.message)}
      />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Enter Password"
        withoutHelperText
        {...register("password")}
      />
      <Link
        href={URL_PATHS.AUTH.FORGOT_PASSWORD}
        className="block text-sm text-gray-dark text-right"
      >
        Forgot Password?
      </Link>
      <HelperText
        showContent={!!error}
        className="text-red w-full justify-center min-h-[20px] mt-2"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" className="mt-4">
        {loading ? "Loading.." : "Sign In"}
      </Button>
    </form>
  );
};

export default SignInForm;
