import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { TimeSheet } from "../model/interface";

export const addTimeSheet = async (data: Partial<TimeSheet>) => await instance.post<Partial<TimeSheet>, TimeSheet>(`${apiEndpoint.timeSheet}`, data)