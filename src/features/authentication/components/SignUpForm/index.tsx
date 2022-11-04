import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Input, Button, Select, HelperText } from "components";
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
            startIcon={<CheckCircleIcon className="w-5 h5 text-green-600" />}
            text="Nice work. This is an excellent password"
          />
        }
      />
      <Input
        id="phone-input"
        label="Phone Number"
        placeholder="Enter Phone Number"
      />
      <Select
        options={countriesList}
        id="country-select"
        label="Country"
        placeholder="Enter Country"
      />
      <Button type="submit" className="mt-11">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
