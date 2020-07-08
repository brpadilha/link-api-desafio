import axios from 'axios';
import { BLING_CONSTANTS } from '../utils/constants';

export const apiBling = axios.create({
  baseURL: `${BLING_CONSTANTS.BLING_URL}`,
});
