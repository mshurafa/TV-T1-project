import { Logo, Divider } from "components";
import { usePayInvoice } from "../../contexts/PayInvoice";
import { useInvoiceDetails } from "../../hooks";
import { getFullName } from "utils";

const InvoiceDetails = () => {
  const { invoiceId } = usePayInvoice();
  const { invoice, isLoading, error } = useInvoiceDetails(invoiceId);

  if (isLoading || !invoice) return <>Loading...</>;
  if (error) <>Something went wrong {error.message}</>;

  const { fixed, freelancer } = invoice.invoice;

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Payment Request</h2>
        <div className="inline-flex items-center">
          <Logo />
          <span className="text-base font-medium tracking-wider text-center ml-2">
            Talents Valley
          </span>
        </div>
      </div>

      <Divider />

      {fixed.map((item) => (
        <div key={item._id} className="flex justify-between">
          <p className="font-medium">{item.itemName}</p>
          <span className="text-base font-medium">${item.price}</span>
        </div>
      ))}
      <span className="block text-xs leading-3 font-normal">
        by{" "}
        {freelancer
          ? getFullName(freelancer?.firstName, freelancer?.lastName)
          : ""}
      </span>
    </>
  );
};

export default InvoiceDetails;
