import type { ClientFeesValue, PaymentOptionFee } from "../../types";

export const calcFeeValue = (
  value: ClientFeesValue,
  paymentOption: PaymentOptionFee | undefined
) => {
  let fee: number | undefined;

  switch (value) {
    case 0: {
      fee = paymentOption?.none;
      break;
    }
    case 50: {
      fee = paymentOption?.halfFee;
      break;
    }
    case 100: {
      fee = paymentOption?.fullFee;
      break;
    }
  }

  return fee;
};
