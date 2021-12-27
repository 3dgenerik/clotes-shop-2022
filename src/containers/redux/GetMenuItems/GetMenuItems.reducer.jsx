import { GET_MENU_ITEMS } from "../constants";

const initialState = {
    items:[]
}

export const setMenuItems = (state = initialState, action = {}) => {
    switch(action.type){
        case GET_MENU_ITEMS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state;
    }
}