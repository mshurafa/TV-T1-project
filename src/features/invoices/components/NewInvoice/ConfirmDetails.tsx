import { useRouter } from "next/router";
import useForm, { Controller } from "lib/react-hook-form";
import {
  Input,
  Button,
  Select,
  PhoneInput,
  HelperText,
  Logo,
} from "components";
import { useAxios } from "hooks";
import {
  countriesList,
  API_SERVICES_URLS,
  URL_PATHS,
  FORM_VALIDATION,
} from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "utils";
// import type { SignUpFormInputsType, SignUpResponseType } from "../../types";
import type { ConfirmDetailsInputsType } from "../../types";

const ConfirmDetails = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    clearErrorOnChange,
  } = useForm<ConfirmDetailsInputsType>();
  // const {
  //   fetchData: signUp,
  //   error,
  //   loading,
  // } = useAxios<SignUpResponseType, SignUpFormInputsType>({
  //   config: {
  //     url: API_SERVICES_URLS.SIGN_UP,
  //     method: "POST",
  //   },
  //   options: {
  //     manual: true,
  //   },
  //   onSuccess: () => {
  //     router.push(URL_PATHS.AUTH.SIGN_IN);
  //   },
  // });

  const onSubmit = handleSubmit((data) => {
    // if (loading) return;
    // signUp(data);
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Payment Request</h2>
        <div className="inline-flex items-center">
          <Logo className="cursor-pointer" />
          <span className="text-base font-medium tracking-wider text-center ml-2">
            Talents Valley
          </span>
        </div>
      </div>

      <div className="h-px my-3 bg-gray" />

      <div className="flex justify-between mb-3">
        <p className="font-medium">
          React native mobile app developments
          <span className="block text-xs leading-3 font-normal">
            by Omar Ziara
          </span>
        </p>
        <span className="text-base font-medium">$500</span>
      </div>
      <h2 className="mt-8 mb-6">Confirm Details</h2>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
          <Input
            id="first-name-input"
            label="First Name"
            placeholder="Enter first name"
            className="flex-1 basis-full"
            inputSize="small"
            {...register("firstName", {
              ...FORM_VALIDATION.fullName,
              onChange: () => clearErrorOnChange("firstName"),
            })}
            error={!!errors.firstName}
            withoutHelperText
          />
          <Input
            id="last-name-input"
            label="Last Name"
            placeholder="Enter last name"
            className="flex-1 basis-full"
            inputSize="small"
            {...register("lastName", {
              ...FORM_VALIDATION.fullName,
              onChange: () => clearErrorOnChange("lastName"),
            })}
            error={!!errors.lastName}
            withoutHelperText
          />
        </div>
        <HelperText
          showContent={!!errors.firstName || !!errors.lastName}
          className="text-red w-full text-xs justify-center min-h-[20px]"
          startIcon={<ErrorIconMini className="w-5 h5" />}
          text={errors.firstName?.message || errors.lastName?.message}
        />
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
          <Input
            id="email-input"
            label="Email"
            placeholder="Enter Email"
            className="flex-1 basis-full"
            inputSize="small"
            {...register("email", {
              ...FORM_VALIDATION.email,
              onChange: () => clearErrorOnChange("email"),
            })}
            error={!!errors.email}
            helperText={getFieldHelperText("error", errors.email?.message)}
          />
          <Controller
            control={control}
            name="mobile"
            rules={{
              ...FORM_VALIDATION.mobile,
              onChange: () => clearErrorOnChange("mobile"),
            }}
            render={({ field: { ref, onChange, ...field } }) => (
              <PhoneInput
                id="phone-input"
                label="Phone Number"
                placeholder="Enter your phone number"
                className="flex-1 basis-full"
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
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
          <Input
            id="city-input"
            label="City"
            placeholder="Enter City"
            className="flex-1 basis-full"
            inputSize="small"
            {...register("city", {
              // ...FORM_VALIDATION.password,
              onChange: () => clearErrorOnChange("city"),
            })}
            error={!!errors.city}
            helperText={getFieldHelperText("error", errors.city?.message)}
          />
          <Input
            id="state-input"
            label="State"
            placeholder="Enter State"
            className="flex-1 basis-full"
            inputSize="small"
            {...register("state", {
              // ...FORM_VALIDATION.password,
              onChange: () => clearErrorOnChange("state"),
            })}
            error={!!errors.state}
            helperText={getFieldHelperText("error", errors.state?.message)}
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
          <Select
            options={countriesList}
            id="country-select"
            label="Country"
            placeholder="Enter Country"
            className="flex-1 basis-full"
            selectSize="small"
            {...register("country", {
              ...FORM_VALIDATION.country,
              onChange: () => clearErrorOnChange("country"),
            })}
            error={!!errors.country}
            helperText={getFieldHelperText("error", errors.country?.message)}
          />
          <Input
            id="zip-code-input"
            label="Zip Code"
            placeholder="Enter Zip Code"
            className="flex-1 basis-full"
            inputSize="small"
            {...register("zip", {
              // ...FORM_VALIDATION.password,
              onChange: () => clearErrorOnChange("zip"),
            })}
            error={!!errors.zip}
            helperText={getFieldHelperText("error", errors.zip?.message)}
          />
        </div>
      </form>
    </>
  );
};

export default ConfirmDetails;
