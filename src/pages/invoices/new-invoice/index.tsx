import { NewInvoice } from "features/invoices";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const NewInvoicePage: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <NewInvoice />
    </NoSsr>
  );
};

NewInvoicePage.mainLayoutProps = {
  title: "New Invoice Confirm Details",
  pageDescription: "New invoice confirm details page description",
  contentClassName: "!items-start",
};

export default NewInvoicePage;
