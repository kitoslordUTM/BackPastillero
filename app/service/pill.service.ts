import { axiosInstance } from "./axios.interceptor";
import { alarm } from "../models/alarms";
import { dataAlarm } from "../models/alarms";

// Función para obtener alarmas
export const getAlarms = async (): Promise<Array<alarm>> => {
  const res = await axiosInstance.get<Array<alarm>>('/Get'); // Devuelve un array de alarmas
  console.log(res.data)
  return res.data;
};

// Función para crear una alarma
export const postAlarms = async (alarm: alarm): Promise<alarm> => {
  const res = await axiosInstance.post<alarm>('/Post', alarm); // Usa `data`, no `params`
  return res.data;
};
