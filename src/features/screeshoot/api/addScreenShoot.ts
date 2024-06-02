import instance from "../../../shared/api/baseApi";
import { sreenshootEndpoint } from "../constant/endpoint";
import { SreenShoot } from "../model/screenshoot";

export const addSreenShoot = async (data: Partial<SreenShoot>) => await instance.post<Partial<SreenShoot>, SreenShoot>(`${sreenshootEndpoint.screenshoot}`, data)