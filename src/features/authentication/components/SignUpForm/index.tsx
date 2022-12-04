import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, PhoneInput, HelperText } from "components";
import { useAxios } from "hooks";
import { countriesList, API_SERVICES_URLS, URL_PATHS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type { SignUpFormInputsType, SignUpResponseType } from "../../types";

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpFormInputsType>();
  const {
    fetchData: signUp,
    error,
    loading,
  } = useAxios<SignUpResponseType, SignUpFormInputsType>({
    config: {
      url: API_SERVICES_URLS.SIGN_UP,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: () => {
      router.push(URL_PATHS.AUTH.SIGN_IN);
    },
  });

  const onSubmit = handleSubmit(signUp);

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Input
          id="first-name-input"
          label="First Name"
          placeholder="Enter first name"
          className="flex-1 basis-full"
          inputSize="small"
          {...register("firstName", formValidation.firstName)}
          error={!!errors.firstName}
          helperText={getFieldHelperText("error", errors.firstName?.message)}
        />
        <Input
          id="last-name-input"
          label="Last Name"
          placeholder="Enter last name"
          className="flex-1 basis-full"
          inputSize="small"
          {...register("lastName", formValidation.lastName)}
          error={!!errors.lastName}
          helperText={getFieldHelperText("error", errors.lastName?.message)}
        />
      </div>
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        inputSize="small"
        {...register("email", formValidation.email)}
        error={!!errors.email}
        helperText={getFieldHelperText("error", errors.email?.message)}
      />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Enter Password"
        inputSize="small"
        {...register("password", formValidation.password)}
        error={!!errors.password}
        helperText={getFieldHelperText("error", errors.password?.message)}
      />
      <Controller
        control={control}
        name="mobile"
        rules={formValidation.mobile}
        render={({ field: { ref, onChange, ...field } }) => (
          <PhoneInput
            id="phone-input"
            label="Phone Number"
            inputSize="small"
            inputProps={{
              ref,
            }}
            error={!!errors.mobile}
            helperText={getFieldHelperText("error", errors.mobile?.message)}
            onChange={(_, __, ___, value) => onChange(value)}
            {...field}
          />
        )}
      />
      <Select
        options={countriesList}
        id="country-select"
        label="Country"
        placeholder="Enter Country"
        selectSize="small"
        {...register("country", formValidation.country)}
        error={!!errors.country}
        helperText={getFieldHelperText("error", errors.country?.message)}
      />
      <HelperText
        showContent={!!error}
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" buttonSize="small" fullWidth>
        {loading ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
