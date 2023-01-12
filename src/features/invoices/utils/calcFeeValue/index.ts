import type { ClientFeesValue, PaymentOptionFee } from "../../types";

export const calcFeeValue = (
  value: ClientFeesValue,
  paymentOption: PaymentOptionFee | undefined
) => {
  return paymentOption?.[value];
};
