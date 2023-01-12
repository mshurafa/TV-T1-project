import type {
  PaymentOptionFee,
  PaymentMethodValue,
  PaymentOptionsData,
} from "../../types";

export const getPaymentOption = (
  paymentMethod: PaymentMethodValue | undefined,
  paymentOptions: PaymentOptionsData | undefined | null
) => {
  let selectedPaymentOptions: PaymentOptionFee | undefined;

  if (paymentMethod === "creditCard") {
    selectedPaymentOptions = paymentOptions?.stripeOptionFee;
  } else if (paymentMethod === "paypal") {
    selectedPaymentOptions = paymentOptions?.paypalOptionFee;
  }

  return selectedPaymentOptions;
};
