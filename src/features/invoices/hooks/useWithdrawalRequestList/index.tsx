import { useSWR, type Fetcher } from "lib/swr";
import axios from "lib/axios";
import { API_WITHDRAWAL_URLS } from "data";

const invoiceDetailsFetcher: Fetcher<string> = (url) =>
  axios.get(url).then((res) => res.data);

export const useWithdrawalRequestList = (id: string | undefined) => {
  const { data, error, isLoading } = useSWR(
    id ? API_WITHDRAWAL_URLS.GET_WITHDRAWAL_REQUEST_LIST: null,
    invoiceDetailsFetcher
  );
  return { invoiceDetails: data?.data, error, isLoading };
};

export default useWithdrawalRequestList;
