import { Logo, Divider } from "components";
import { usePayInvoice } from "../../contexts/PayInvoice";
import { useInvoiceDetails } from "../../hooks";

const InvoiceDetails = () => {
  const { invoiceId } = usePayInvoice();
  const { invoice, isLoading, error } = useInvoiceDetails(invoiceId);

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

      <div className="flex justify-between mb-3">
        <p className="font-medium">
          React native mobile app developments
          <span className="block text-xs leading-3 font-normal">
            by Omar Ziara
          </span>
        </p>
        <span className="text-base font-medium">$500</span>
      </div>
    </>
  );
};

export default InvoiceDetails;
