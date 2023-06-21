import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonRequest";

export const register =async (body,header)=>{
   return await commonRequest("POST",`${BASE_URL}/user/register`,body,header)
} 

// export const login = async(body,header)=>{
//    return await commonRequest("POST",`${BASE_URL}/user/login`,body,header)
// }