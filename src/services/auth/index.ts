import { HttpService } from '../http';
import {
  prepareErrorResponse,
  prepareSuccessResponse,
} from '../http/responses';
import { AUTH_ENDPOINTS } from './endpoints';

const httpService = new HttpService();

export const signIn = async (data: TObject) => {
  try {
    const response = await httpService.POST({
      url: AUTH_ENDPOINTS.SIGN_IN,
      data,
    });

    return prepareSuccessResponse(response);
  } catch (error) {
    throw prepareErrorResponse(error);
  }
};

export const signUp = async (data: TObject) => {
  try {
    const response = await httpService.POST({
      url: AUTH_ENDPOINTS.SIGN_UP,
      data,
    });

    return prepareSuccessResponse(response);
  } catch (error) {
    throw prepareErrorResponse(error);
  }
};
