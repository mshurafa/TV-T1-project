import type { AxiosRequestConfig } from "lib/axios";
import type { ErrorType } from "types";

export interface ReturnedValuesType<DType = any, BodyType = any> {
  data: DType | undefined;
  error: ErrorType | undefined;
  loading: boolean;
  fetchData: (body?: BodyType) => Promise<DType | undefined>;
}

export interface OptionsType {
  manual?: boolean;
  withState?: boolean;
  disabled?: boolean;
}

export interface UseAxiosProps<DType = any> {
  config: AxiosRequestConfig<any>;
  options?: OptionsType;
  onSuccess?: (data: DType) => void;
  onError?: (data: ErrorType) => void;
}
