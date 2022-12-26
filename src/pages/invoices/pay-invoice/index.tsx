import { PayInvoice } from "features/invoices";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const PayInvoicePage: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <PayInvoice />
    </NoSsr>
  );
};

PayInvoicePage.mainLayoutProps = {
  title: "Pay Invoice",
  pageDescription: "Pay invoice page description",
  contentClassName: "!items-start",
};

export default PayInvoicePage;
