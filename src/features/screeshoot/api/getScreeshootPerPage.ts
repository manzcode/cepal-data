import instance from "../../../shared/api/baseApi";
import { sreenshootEndpoint } from "../constant/endpoint";
import { SreenShoot } from "../model/screenshoot";

export const getScreenshootPerPage = async (page: number) => await instance.get<SreenShoot[]>(`${sreenshootEndpoint.screenshoot}?_page=${page}&_limit=3`)