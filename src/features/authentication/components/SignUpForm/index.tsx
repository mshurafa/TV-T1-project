import { useForm, Controller } from "react-hook-form";
// import useSWR from "swr";
import { Input, Button, Select, PhoneInput } from "components";
import { countriesList } from "data";
// import { signUp } from "../../services";
import { getFieldHelperText } from "../../utils";
import { formValidation, API_SERVICES_KEYS } from "../../data";
import type { SignUpFormInputsType } from "../../types";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpFormInputsType>();
  // const { data, error, mutate } = useSWR(API_SERVICES_KEYS.SIGN_UP, signUp);
  console.log("🚀 ~ file: index.tsx ~ line 15 ~ SignUpF orm ~ errors", errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // fetch("https://talents-valley.herokuapp.com/api/user/signup", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...data, mobile: `+${data.mobile}` }),
    // })
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log("🚀 ~ file: index.tsx ~ line 23 ~ onSubmit ~ data", data);
    //   });
  });

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
        render={({ field: { ref, ...field } }) => (
          <PhoneInput
            id="phone-input"
            label="Phone Number"
            inputProps={{
              ref,
            }}
            error={!!errors.mobile}
            helperText={getFieldHelperText("error", errors.mobile?.message)}
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
