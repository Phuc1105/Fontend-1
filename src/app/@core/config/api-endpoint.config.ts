import {APP_CONFIG} from "./app.config";
import {IAPIEndpoint} from "../interfaces";


export const API_BASE_URL = APP_CONFIG.apiBaseUrl;
export const API_STATISTICS = API_BASE_URL+'/statistics'
export const API_PRODUCTS = API_BASE_URL+'/products'
export const API_PERSONNELS = API_BASE_URL +'/personnels'
export const API_USER = '/api/users';
export const API_ENDPOINT: IAPIEndpoint = {
  auth: {
    base: API_BASE_URL + '/' + 'auth',
    login: '/auth/login',
    logout: '/auth/logout',
  },
};
