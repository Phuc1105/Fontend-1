import {APP_CONFIG} from "./app.config";
import {IAPIEndpoint} from "../interfaces";

export const API_BASE_URL = APP_CONFIG.apiBaseUrl;
export const API_PERSONNELS = API_BASE_URL +'/personnels';
export const API_DISCOUNTS = API_BASE_URL +'/discounts';
export const API_USERS = API_BASE_URL +'/users';
export const API_DELIVERIES = API_BASE_URL +'/delivery';
export const API_ENDPOINT: IAPIEndpoint = {
  auth: {
    base: API_BASE_URL + '/' + 'auth',
    login: '/auth/login',
    logout: '/auth/logout',
  },
};
