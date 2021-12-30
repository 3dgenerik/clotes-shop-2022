import { GET_AUTH_USER } from "../constants";

export const authUser = (user) => {
    return{
        type:GET_AUTH_USER, 
        payload:user
    }
}