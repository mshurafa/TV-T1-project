import { useForm } from "react-hook-form";
import { Input, Button } from "components";
import { useVerifyPasswordCode } from "../../hooks";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type { ForgotPasswordFormInputType } from "../../types";

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputType>();

  const { sendCodeRequest, loading, error } = useVerifyPasswordCode();

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
      <Button type="submit" buttonSize="small" fullWidth className="mt-9 mb-14">
        {loading ? "Loading..." : "Send Code"}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
