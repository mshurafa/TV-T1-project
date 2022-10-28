import Link from "next/link";
import { Input, Button } from "components";

export const SignUpForm = () => {
  return (
    <form>
      <div className="flex gap-8">
        <Input
          id="first-name-input"
          label="First Name"
          placeholder="Enter first name"
          className="mb-6 flex-1"
        />
        <Input
          id="last-name-input"
          label="Last Name"
          placeholder="Enter last name"
          className="mb-6 flex-1"
        />
      </div>
      <Input
        id="email-input"
        label="Email"
        placeholder="Email"
        className="mb-6"
      />
      <Input
        id="password-input"
        type="password"
        label="Password"
        placeholder="Password"
        className="mb-6"
      />
      <Input
        id="phone-input"
        label="Phone Number"
        placeholder="Phone Number"
        className="mb-6"
      />
      <Input
        id="country-select"
        label="Country"
        placeholder="Country"
        className="mb-6"
      />
      <Link href="#" className="block text-sm text-gray-dark text-right">
        Forgot Password?
      </Link>
      <Button type="submit" className="mt-11">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
