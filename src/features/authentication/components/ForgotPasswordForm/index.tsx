import { Input, Button } from "components";

export const ForgotPasswordForm = () => {
  return (
    <form>
      <Input id="email-input" label="Email" placeholder="Enter Email" />
      <Button type="submit" className="mt-9 mb-14">
        Send Code
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
