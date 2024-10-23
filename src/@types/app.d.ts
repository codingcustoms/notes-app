type TNumberOrString = number | string;

type TNullOrUndefined = null | undefined;

type TUnknownOrAny = unknown | any;

type TArray<Type> = Array<Type>;

type TObject<
  Key extends string = string,
  Values =
    | TNumberOrString
    | TNullOrUndefined
    | TUnknownOrAny
    | Record<Key, Value>
    | TArray<Value>,
> = Record<Key, Values>;

type TZodInfer<Schema> = import('zod').infer<Schema>;

type TOptions = { title: string; key: string };

type AxiosRequestConfig = import('axios').AxiosRequestConfig;

type TQueryRequest = {
  url: string;
  params?: AxiosRequestConfig['params'];
  configs?: Omit<AxiosRequestConfig, 'params'>;
};

type TMutationRequest = { data: TObject } & TQueryRequest;

type TSuccessResponse = {
  data: TObject;
  additionalData: TObject;
  statusCode: number;
  statusText: string;
};

type TErrorResponse = {
  data: TObject | TNullOrUndefined | TUnknownOrAny;
  errorType: string | TNullOrUndefined | TUnknownOrAny;
  statusCode: number | TNullOrUndefined | TUnknownOrAny;
  statusText: string | TNullOrUndefined | TUnknownOrAny;
};
