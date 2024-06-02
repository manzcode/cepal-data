import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { TimeSheet } from "../model/interface";

export const deleteTimeSheet = async (id: number) => await instance.delete<Partial<TimeSheet>, TimeSheet>(`${apiEndpoint.timeSheet}/${id}`)