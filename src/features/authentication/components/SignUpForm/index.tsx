import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, PhoneInput, HelperText } from "components";
import { CheckCircleIconMini } from "lib/@heroicons";
import { countriesList } from "data";
import type { SignUpFormInputsType } from "../../types";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpFormInputsType>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-8">
        <Input
          id="first-name-input"
          label="First Name"
          placeholder="Enter first name"
          className="flex-1 basis-full"
          {...register("firstName")}
        />
        <Input
          id="last-name-input"
          label="Last Name"
          placeholder="Enter last name"
          className="flex-1 basis-full"
          {...register("lastName")}
        />
      </div>
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        {...register("email")}
      />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Enter Password"
        {...register("password")}
        helperText={
          <HelperText
            startIcon={
              <CheckCircleIconMini className="w-5 h5 text-green-600" />
            }
            text="Nice work. This is an excellent password"
          />
        }
      />
      <Controller
        control={control}
        name="phoneNumber"
        rules={{ required: "Phone Number is required" }}
        render={({ field: { ref, ...field } }) => (
          <PhoneInput
            id="phone-input"
            label="Phone Number"
            inputProps={{
              ref,
            }}
            error={!!errors.phoneNumber}
            {...field}
          />
        )}
      />
      <Select
        options={countriesList}
        id="country-select"
        label="Country"
        placeholder="Enter Country"
        {...register("country")}
      />
      <Button type="submit" className="mt-4">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
