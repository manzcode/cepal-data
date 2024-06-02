import instance from "../../../shared/api/baseApi";
import { sreenshootEndpoint } from "../constant/endpoint";
import { SreenShoot } from "../model/screenshoot";


export const updateScreenShoot = async (data: Partial<SreenShoot>, id: number) => await instance.patch<Partial<SreenShoot>, SreenShoot>(`${sreenshootEndpoint.screenshoot}/${id}`, data)