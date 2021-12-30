import { SIGNIN_EMAIL, SIGNIN_PASSWORD} from "../constants";

export const signinEmail = (value) => {
    return{
        type:SIGNIN_EMAIL,
        payload:value
    }
}

export const signinPassword= (value) => {
    return{
        type:SIGNIN_PASSWORD,
        payload:value
    }
}