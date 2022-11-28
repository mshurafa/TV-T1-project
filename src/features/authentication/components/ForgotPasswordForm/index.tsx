import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Input, Button } from "components";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type {
  ForgotPasswordFormInputType,
  ForgotPasswordResponseType,
} from "../../types";

export const ForgotPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputType>();
  const {
    fetchData: sendCodeRequest,
    error,
    loading,
  } = useAxios<ForgotPasswordResponseType, ForgotPasswordFormInputType>({
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

  const onSubmit = handleSubmit(sendCodeRequest);

  const errorMessage = errors.email?.message || error?.message;

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        {...register("email", formValidation.email)}
        error={!!errorMessage}
        helperText={getFieldHelperText("error", errorMessage)}
      />
      <Button type="submit" className="mt-9 mb-14">
        {loading ? "Loading..." : "Send Code"}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
