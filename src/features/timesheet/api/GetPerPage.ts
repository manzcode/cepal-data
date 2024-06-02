import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { TimeSheet } from "../model/interface";

export const getTimeSheetPerPage = async (page: number) => await instance.get<TimeSheet[]>(`${apiEndpoint.timeSheet}?_page=${page}&_limit=5`)