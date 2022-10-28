import Link from "next/link";
import { RegistrationCard, LoginForm } from "features/authentication";
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
      <LoginForm />
    </RegistrationCard>
  );
};

Login.mainLayoutProps = {
  title: "Talents Valley",
  pageDescription: "Home page description",
  withoutNavbar: true,
};

export default Login;
