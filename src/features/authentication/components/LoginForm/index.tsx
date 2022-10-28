import Link from "next/link";
import { Input } from "components";

export const LoginForm = () => {
  return (
    <form>
      <Input label="Email" inputClassName="mb-[35px]" />
      <Input label="Password" type="password" />
      <Link href="#" className="block text-sm text-gray-dark text-right">
        Forgot Password?
      </Link>
      <button
        type="submit"
        className="block w-full text-2xl bg-blue-light text-white rounded-lg p-[14px] mt-16"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
