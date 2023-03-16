import { Button, Input } from "components";
import { API_ENDPOINT } from "data";
import { useState } from "react";
import { getAuthorizationHeader } from "utils";
import { useCurrentUser } from "features/authentication";

const RecipientForm = ({
  closeModal,
  recipient,
  handleChangeRecipient,
  showVerFormHandler,
}) => {
  const [loading, setLoading] = useState(false);
  const { user, updateUser } = useCurrentUser();
  console.log(user);

  const authHeader = getAuthorizationHeader();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT}/recipient/send-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeader },
      body: JSON.stringify({
        mobile: user.mobile,
        idNumber: user.verifiedId.idNumber,
      }),
    });
    setLoading(false);
    showVerFormHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-2">
        <label htmlFor="name" className="text-sm font-semibold mb-1">
          Recipient Full Name (Arabic)
        </label>
        <input
          type="text"
          className="block w-full rounded-md p-2 border-[1px] border-gray"
          name="name"
          id="name"
          placeholder="الاسم ثلاثي بالعربي"
          value={recipient.name}
          onChange={handleChangeRecipient}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="mobile" className="text-sm font-semibo mb-1ld">
          Recipient Phone Number
        </label>
        <input
          type="text"
          className="block w-full rounded-md p-2 border-[1px] border-gray"
          name="mobile"
          id="mobile"
          placeholder="Enter Phone Number"
          value={recipient.mobile}
          onChange={handleChangeRecipient}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="name" className="text-sm font-semibold mb-1">
          Recipient ID (National ID Or Passport)
        </label>
        <input
          type="text"
          className="block w-full rounded-md p-2 border-[1px] border-gray"
          name="idNumber"
          id="idNumber"
          placeholder="Enter ID Number"
          value={recipient.idNumber}
          onChange={handleChangeRecipient}
        />
      </div>{" "}
      <Button className="w-full mt-5" type="Submit" buttonSize="small">
        Submit
      </Button>
    </form>
  );
};
export default RecipientForm;
