import { Input, Button, Select, PhoneInput, HelperText } from "components";
import { CheckCircleIconMini } from "lib/@heroicons";
import { countriesList } from "data";

export const SignUpForm = () => {
  return (
    <form>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-8">
        <Input
          id="first-name-input"
          label="First Name"
          placeholder="Enter first name"
          className="flex-1 basis-full"
        />
        <Input
          id="last-name-input"
          label="Last Name"
          placeholder="Enter last name"
          className="flex-1 basis-full"
        />
      </div>
      <Input id="email-input" label="Email" placeholder="Enter Email" />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Enter Password"
        helperText={
          <HelperText
            startIcon={
              <CheckCircleIconMini className="w-5 h5 text-green-600" />
            }
            text="Nice work. This is an excellent password"
          />
        }
      />
      <PhoneInput id="phone-input" label="Phone Number" />
      <Select
        options={countriesList}
        id="country-select"
        label="Country"
        placeholder="Enter Country"
      />
      <Button type="submit" className="mt-4">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
