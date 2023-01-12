import type { ClientFeesValue, PaymentOptionFee } from "../../types";

export const calcFeeValue = (
  fee: ClientFeesValue,
  paymentOption: PaymentOptionFee | undefined
) => {
  return paymentOption?.[fee];
};
