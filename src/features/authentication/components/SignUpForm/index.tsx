import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, PhoneInput } from "components";
import { countriesList } from "data";
import { getFieldHelperText } from "../../utils";
import { formValidation } from "../../data";
import type { SignUpFormInputsType } from "../../types";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpFormInputsType>();
  console.log("🚀 ~ file: index.tsx ~ line 15 ~ SignUpForm ~ errors", errors);

  const onSubmit = handleSubmit((data) => console.log(data));

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
        name="phoneNumber"
        rules={formValidation.phoneNumber}
        render={({ field: { ref, ...field } }) => (
          <PhoneInput
            id="phone-input"
            label="Phone Number"
            inputProps={{
              ref,
            }}
            error={!!errors.phoneNumber}
            helperText={getFieldHelperText(
              "error",
              errors.phoneNumber?.message
            )}
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
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
