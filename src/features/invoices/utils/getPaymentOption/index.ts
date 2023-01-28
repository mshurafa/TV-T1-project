import type {
  PaymentOptionFee,
  PaymentMethodValue,
  PaymentOptionsData,
} from "../../types";

export const getPaymentOption = (
  paymentMethod: PaymentMethodValue | undefined,
  paymentOptions: PaymentOptionsData | undefined | null
) => {
  let selectedPaymentOption: PaymentOptionFee | undefined;

  if (paymentMethod === "creditCard") {
    selectedPaymentOption = paymentOptions?.stripeOptionFee;
  } else if (paymentMethod === "paypal") {
    selectedPaymentOption = paymentOptions?.paypalOptionFee;
  }

  return selectedPaymentOption;
};
