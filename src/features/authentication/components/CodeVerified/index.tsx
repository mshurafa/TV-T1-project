import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "components";

export const CodeVerified = () => {
  const router = useRouter();

  return (
    <>
      <Image
        alt="code verified successfully"
        src="/assets/img/check-mark.png"
        width={65}
        height={65}
        className="m-auto mt-10"
      />
      <h6 className="text-lg my-10 font-medium text-center">Password Reset</h6>
      <p className="text-base text-black mb-9">
        Your Password has been Successfully Reset. Click Below To Login
      </p>
      <Button className="my-20" onClick={() => router.push("/sign-in")}>
        Sign In
      </Button>
    </>
  );
};

export default CodeVerified;
