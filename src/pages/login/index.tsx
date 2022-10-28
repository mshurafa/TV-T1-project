import Link from "next/link";
import { Input } from "components";
import { RegistrationCard } from "features/authentication";
import type { NextPageWithLayout } from "types";

const Login: NextPageWithLayout = () => {
  return (
    <RegistrationCard
      formTitle="Login to Your Account"
      formCaption={
        <>
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-blue-light">
            Sign up
          </Link>
        </>
      }
    >
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
    </RegistrationCard>
  );
};

Login.mainLayoutProps = {
  title: "Talents Valley",
  pageDescription: "Home page description",
  withoutNavbar: true,
};

export default Login;
