import axios from "axios";
import {CONSTANTS}  from '../util/constants'

export const accountaxiosInstance = axios.create({
    baseURL:CONSTANTS.ACCOUNT_SERVICE_BASE_URL
})
export const authaxiosInstance =axios.create({
    baseURL:CONSTANTS.AUTH_SERVICE_BASE_URL
})