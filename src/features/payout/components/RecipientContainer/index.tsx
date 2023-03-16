import RecipientForm from "features/payout/components/RecipientForm";
import {
  useMobileCode,
  VerificationCard,
  VerifyMobileForm,
} from "features/verification";
import { useCurrentUser } from "features/authentication";
import { useState } from "react";

const RecipientContainer = ({ closeModal }) => {
  const [recipient, setRecipient] = useState({
    code: "123456",
    name: "",
    idNumber: "",
    mobile: "",
  });

  const [showRecipientForm, setShowRecipientForm] = useState(true);
  const [showVerCard, setShowVerCard] = useState(false);

  const { user, updateUser } = useCurrentUser();
  const [isVerified, setIsVerified] = useState(user?.verifiedMobile);
  const { sendCodeRequest, loading } = useMobileCode();

  const onVerify = () => {
    if (user) {
      updateUser({ ...user, verifiedMobile: true });
    }
    setIsVerified(true);
    closeModal();
  };

  const handleChangeRecipient = (e: any) => {
    setRecipient((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(recipient);
  };

  const showVerFormHandler = () => {
    setShowVerCard(true);
    setShowRecipientForm(false);
  };
  return (
    <>
      {showVerCard ? (
        <VerificationCard
          className="rounded-none border-transparent shadow-none"
          title="Phone Verification"
          imgSrc="/assets/img/phone.png"
          caption={
            <>
              Didn&apos;t get the code?{" "}
              <a
                onClick={() => sendCodeRequest()}
                className="text-blue-light cursor-pointer"
              >
                {loading ? "Loading..." : "Resend"}
              </a>
            </>
          }
        >
          {
            <>
              <p className="text-sm text-gray-dark mb-4">
                We have sent you a verification code to your phone number{" "}
                {user?.mobile}
              </p>
              <VerifyMobileForm
                requestUrl="/recipient/create"
                requestBody={recipient}
                onVerify={onVerify}
              />
            </>
          }
        </VerificationCard>
      ) : null}
      {showRecipientForm ? (
        <RecipientForm
          closeModal={closeModal}
          handleChangeRecipient={handleChangeRecipient}
          recipient={recipient}
          showVerFormHandler={showVerFormHandler}
        />
      ) : null}
    </>
  );
};

export default RecipientContainer;
