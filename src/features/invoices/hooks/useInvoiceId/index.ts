import { useRouter } from "next/router";

export const useInvoiceId = () => {
  const { query } = useRouter();
  const invoiceId = (query.invoiceId as string) || undefined;

  return invoiceId;
};

export default useInvoiceId;
