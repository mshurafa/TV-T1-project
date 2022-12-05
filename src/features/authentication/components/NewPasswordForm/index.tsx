import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Input, Button, HelperText } from "components";
import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type {
  NewPasswordFormInputsType,
  NewPasswordResponseType,
  NewPasswordFormPayloadType,
} from "../../types";

export const NewPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordFormInputsType>();
  const {
    fetchData: recoverPassword,
    error,
    loading,
  } = useAxios<NewPasswordResponseType, NewPasswordFormPayloadType>({
    config: {
      url: API_SERVICES_URLS.RECOVER_PASSWORD,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      //show password reset screen
      //   router.push(URL_PATHS.AUTH.VERIFIED);
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (loading) return;
    const payload = {
      password: data.password,
      recoverToken: router.query.newPasswordData?.[0] || "",
    };
    recoverPassword(payload);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input
        id="password-input"
        type="password"
        label="New Password"
        placeholder="Enter New Password"
        inputSize="small"
        {...register("password", formValidation.password)}
        error={!!errors.password}
        helperText={getFieldHelperText("error", errors.password?.message)}
      />
      <Input
        id="re-password-input"
        type="password"
        label="Re-Enter Password"
        placeholder="Re-Enter Password"
        inputSize="small"
        withoutHelperText
        {...register("rePassword")}
        error={!!errors.rePassword}
        helperText={getFieldHelperText("error", errors.rePassword?.message)}
      />
      <HelperText
        showContent={!!error}
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" buttonSize="small" fullWidth className="mb-6">
        {loading ? "Loading.." : "Continue"}
      </Button>
    </form>
  );
};

export default NewPasswordForm;
