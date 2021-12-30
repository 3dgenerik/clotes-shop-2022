import { SIGNIN_EMAIL, SIGNIN_PASSWORD} from "../constants";

const initialState = {
    email:'',
    password:''
} 

export const setSigninEmailPassword = (state = initialState, action = {}) => {
    switch(action.type){
        case SIGNIN_EMAIL:
            return{
                ...state,
                email:action.payload
            }
        case SIGNIN_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
        default:
            return state;
    }
}