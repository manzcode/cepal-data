import instance from "../../../shared/api/baseApi";
import { sreenshootEndpoint } from "../constant/endpoint";
import { SreenShoot } from "../model/screenshoot";

export const deleteScreenShoot = async (id: number) => await instance.delete<Partial<SreenShoot>, SreenShoot>(`${sreenshootEndpoint.screenshoot}/${id}`)