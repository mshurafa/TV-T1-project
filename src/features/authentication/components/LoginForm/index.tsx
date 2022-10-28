import Link from "next/link";
import { Input, Button } from "components";

export const LoginForm = () => {
  return (
    <form>
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
      />
      <Link href="#" className="block text-sm text-gray-dark text-right">
        Forgot Password?
      </Link>
      <Button type="submit" className="mt-11">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
