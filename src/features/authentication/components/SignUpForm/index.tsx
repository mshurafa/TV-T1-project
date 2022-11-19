import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, PhoneInput } from "components";
import { useAxios } from "hooks";
import { countriesList, API_SERVICES_URLS } from "data";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type { SignUpFormInputsType, SignUpResponseType } from "../../types";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpFormInputsType>();
  const {
    fetchData: signUp,
    data,
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
  });

  const onSubmit = handleSubmit(signUp);

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-8">
        <Input
          id="first-name-input"
          label="First Name"
          placeholder="Enter first name"
          className="flex-1 basis-full"
          {...register("firstName", formValidation.firstName)}
          error={!!errors.firstName}
          helperText={getFieldHelperText("error", errors.firstName?.message)}
        />
        <Input
          id="last-name-input"
          label="Last Name"
          placeholder="Enter last name"
          className="flex-1 basis-full"
          {...register("lastName", formValidation.lastName)}
          error={!!errors.lastName}
          helperText={getFieldHelperText("error", errors.lastName?.message)}
        />
      </div>
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
            inputProps={{
              ref,
            }}
            error={!!errors.mobile}
            helperText={getFieldHelperText("error", errors.mobile?.message)}
            onChange={(_, __, event) => onChange(event)}
            {...field}
          />
        )}
      />
      <Select
        options={countriesList}
        id="country-select"
        label="Country"
        placeholder="Enter Country"
        {...register("country", formValidation.country)}
        error={!!errors.country}
        helperText={getFieldHelperText("error", errors.country?.message)}
      />
      <Button type="submit" className="mt-4">
        {loading ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
