export type alarm ={

    id?: number;
    hour: number;
    minute: number;
    description: string;
    alarm_date?: string;

}

export type processedAlarm ={
    hour: number;
    minute: number;
    description: string;
    alarm_date?: string;
}

export type dataAlarm<T> ={
    data: T[]
}