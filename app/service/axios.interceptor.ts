import { MAIN_URL,TIMEOUT } from "./utils";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: MAIN_URL,
    timeout: TIMEOUT
  });
