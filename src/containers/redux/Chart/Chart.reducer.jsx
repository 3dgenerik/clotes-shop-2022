import { SET_CHART_VALUE, RESET_CHART } from "../constants";

const initial_state = {
    value: 0,
    items: 0
}

export const setChart = (state = initial_state, action = {}) => {
    switch(action.type){
        case SET_CHART_VALUE:
            return {
                ...state,
                value: state.value + action.payload,
                items: state.items + 1
            }
        case RESET_CHART:
            return{
                ...state,
                value:0,
                items: 0
            }
        default:
            return state;
    }
}