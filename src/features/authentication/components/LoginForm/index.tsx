import Link from "next/link";
import { Input } from "components";

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
      <button
        type="submit"
        className="block w-full text-2xl bg-blue-light text-white rounded-md p-3 mt-11"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
