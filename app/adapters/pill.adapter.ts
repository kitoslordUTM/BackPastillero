import { alarm, processedAlarm } from "../models/alarms";

export const alarmAdapter = (data: Array<alarm>): Array<processedAlarm> => {
  if (!Array.isArray(data)) {
    console.error("Datos inválidos en alarmAdapter:", data);
    return [];
  }
  return data.map((pill) => {
    const { hour, minute, alarm_date, description } = pill;
      
    console.log( 'datos adaptador:', pill )
    return {
      hour,
      minute,
      alarm_date,
      description,
    } as processedAlarm;
  });
};
