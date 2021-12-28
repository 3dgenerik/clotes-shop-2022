import { GET_COLLECTION } from "../constants";

const initial_state = {
    shopData: []
}

export const setCollection = (state = initial_state, action = {}) => {
    switch(action.type){
        case GET_COLLECTION:
            return {
                ...state,
                shopData: action.payload
            }
        default:
            return state;
    }
}