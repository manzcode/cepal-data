import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { TimeSheet } from "../model/interface";


export const updateTimeSheet = async (data: Partial<TimeSheet>, id: number) => await instance.patch<Partial<TimeSheet>, TimeSheet>(`${apiEndpoint.timeSheet}/${id}`, data)