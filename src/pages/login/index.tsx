import Link from "next/link";
import { Card, Input, Logo } from "components";
import type { NextPageWithLayout } from "types";

const Login: NextPageWithLayout = () => {
  return (
    <Card className="w-full sm:w-[703px] font-semibold">
      <Logo className="m-auto" />
      <h1 className="text-3xl text-center">Talents Valley</h1>
      <div className="sm:max-w-[500px] m-auto">
        <p className="text-2xl mt-[55px] mb-[42px]">Login to Your Account</p>
        <form>
          <Input label="Email" inputClassName="mb-[35px]" />
          <Input label="Password" type="password" />
          <Link
            href="#"
            className="block text-base text-gray-dark font-normal text-right"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="block w-full text-2xl bg-blue-light text-white rounded-lg p-[14px] mt-16"
          >
            Sign In
          </button>
        </form>
      </div>
      <p className="text-base text-center font-normal mt-12 mb-24">
        Don&apos;t have an account?{" "}
        <Link href="#" className="text-blue-light">
          Sign up
        </Link>
      </p>
    </Card>
  );
};

Login.mainLayoutProps = {
  title: "Talents Valley",
  pageDescription: "Home page description",
  withoutNavbar: true,
};

export default Login;
