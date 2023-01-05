import {
  createContext,
  useContext,
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useRouter } from "next/router";
import ConfirmDetails from "../../components/PayInvoice/ConfirmDetails";
import Preview from "../../components/PayInvoice/Preview";
import Payment from "../../components/PayInvoice/Payment";
import Confirmation from "../../components/PayInvoice/Confirmation";
import { PAY_INVOICE_STEPS } from "../../data";
import { useInvoiceDetails, useCompleteInvoiceMutation } from "../../hooks";
import type {
  PayInvoiceContextType,
  PayInvoiceStateType,
  ConfirmDetailsInputsType,
} from "../../types";
import type { StepperOnChangeType } from "components/types";

const PayInvoiceContext = createContext<PayInvoiceContextType>({
  invoiceId: undefined,
  stepsData: {
    steps: [],
    activeStepIndex: 0,
    stepContent: <></>,
    currentStep: PAY_INVOICE_STEPS[0],
    nextStep: undefined,
    previousStep: undefined,
    isLastStep: false,
  },
  onStepperChange: () => {},
  invoiceData: {
    data: undefined,
    isLoading: true,
  },
  nextButton: {
    label: "",
    isLoading: false,
  },
});

export const usePayInvoice = () => useContext(PayInvoiceContext);

const PayInvoiceState: PayInvoiceStateType = ({ children }) => {
  const [steps, setSteps] = useState(PAY_INVOICE_STEPS);
  const confirmDetailsFormRef = useRef<HTMLButtonElement>(null);
  const { query } = useRouter();
  const invoiceId = (query.invoiceId as string) || undefined;
  const { data: invoice, isLoading: invoiceLoading } =
    useInvoiceDetails(invoiceId);
  const { trigger, isLoading: confirmDetailsLoading } =
    useCompleteInvoiceMutation(invoiceId);
  const activeStepIndex = steps.findIndex((step) => step.active);
  const currentStep = steps[activeStepIndex];
  const nextStep = steps[activeStepIndex + 1];
  const previousStep = steps[activeStepIndex - 1];
  const isLastStep = steps[steps.length - 1].id === currentStep.id;
  const nextButtonText = currentStep.id === "step3" ? "Pay $520" : "Next";
  const nextButtonLoading = confirmDetailsLoading;

  const nextActionHandler = useCallback(() => {
    const updatedSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return { ...step, completed: true, active: false };
      } else if (step.id === nextStep.id) {
        return { ...step, active: true };
      } else {
        return step;
      }
    });
    setSteps(updatedSteps);
  }, [currentStep.id, nextStep?.id, steps]);

  const backActionHandler = useCallback(() => {
    const updatedSteps = steps.map((step) => {
      if (step.id === currentStep.id) {
        return { ...step, active: false };
      } else if (step.id === previousStep.id) {
        return { ...step, active: true };
      } else {
        return step;
      }
    });
    setSteps(updatedSteps);
  }, [currentStep.id, previousStep?.id, steps]);

  const onSubmitConfirmDetails = useCallback(
    (data: ConfirmDetailsInputsType) => {
      console.log("🚀 ~ file: index.tsx:155 ~ data", data);
      //call mutate API here
      nextActionHandler();
    },
    [nextActionHandler]
  );

  const onStepperChange: StepperOnChangeType = useCallback(
    (action) => {
      if (action === "next") {
        if (currentStep.id === "step1") {
          confirmDetailsFormRef.current?.click();
        } else {
          nextActionHandler();
        }
      } else {
        backActionHandler();
      }
    },
    [backActionHandler, currentStep.id, nextActionHandler]
  );

  const stepsContent = useMemo(
    () => [
      <ConfirmDetails
        key="step1"
        ref={confirmDetailsFormRef}
        onSubmit={onSubmitConfirmDetails}
      />,
      <Preview key="step2" />,
      <Payment key="step3" />,
      <Confirmation key="step4" />,
    ],
    [onSubmitConfirmDetails]
  );
  const stepContent = stepsContent[activeStepIndex];

  const value: PayInvoiceContextType = useMemo(
    () => ({
      invoiceId,
      stepsData: {
        steps,
        activeStepIndex,
        stepContent,
        currentStep,
        nextStep,
        previousStep,
        isLastStep,
      },
      invoiceData: {
        data: invoice,
        isLoading: invoiceLoading,
      },
      onStepperChange,
      nextButton: {
        label: nextButtonText,
        isLoading: nextButtonLoading,
      },
    }),
    [
      invoiceId,
      steps,
      activeStepIndex,
      stepContent,
      currentStep,
      nextStep,
      previousStep,
      isLastStep,
      nextButtonText,
      onStepperChange,
      invoice,
      invoiceLoading,
      nextButtonLoading,
    ]
  );

  useEffect(() => {
    () => {
      // clean storage data
    };
  }, []);

  return (
    <PayInvoiceContext.Provider value={value}>
      {children}
    </PayInvoiceContext.Provider>
  );
};

export default PayInvoiceState;
