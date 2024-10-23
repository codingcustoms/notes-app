import { AxiosError, AxiosResponse } from 'axios';

export const prepareSuccessResponse = (
  response: AxiosResponse
): TSuccessResponse => {
  const { data, status, statusText } = response;

  return {
    data,
    additionalData: {},
    statusCode: status,
    statusText,
  };
};

export const prepareErrorResponse = (
  error: unknown | any
): TErrorResponse | TNumberOrString | unknown | any => {
  const finalResponse: TErrorResponse = {
    data: null,
    statusCode: null,
    statusText: null,
    errorType: null,
  };

  if (error.name === 'AxiosError') {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      finalResponse.errorType = 'RESPONSE';
      finalResponse.data = axiosError.response?.data;
      finalResponse.statusCode = axiosError.response?.status;
      finalResponse.statusText = axiosError.response?.statusText;

      return finalResponse;
    } else if (axiosError.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      finalResponse.errorType = 'REQUEST';
      finalResponse.data = axiosError.request?.data?.detail;
      finalResponse.statusCode = axiosError.request?.status;
      finalResponse.statusText = axiosError.request?.statusText;

      return finalResponse;
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    return error;
  }
};
