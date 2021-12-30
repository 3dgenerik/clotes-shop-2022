import { GET_AUTH_USER } from "../constants";

const initialState = {
    user:null
}

export const setAuthUser = (state = initialState, action = {}) => {
    switch(action.type){
        case GET_AUTH_USER:
            return {
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}