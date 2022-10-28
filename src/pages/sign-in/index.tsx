import Link from "next/link";
import { RegistrationCard, SignInForm } from "features/authentication";
import type { NextPageWithLayout } from "types";

const SignIn: NextPageWithLayout = () => {
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
      <SignInForm />
    </RegistrationCard>
  );
};

SignIn.mainLayoutProps = {
  title: "Talents Valley",
  pageDescription: "Home page description",
  withoutNavbar: true,
};

export default SignIn;
