import { SET_CHART_VALUE, RESET_CHART } from "../constants";

export const chart = (value) => {
    return {
        type: SET_CHART_VALUE,
        payload:value
    }
}

export const resetChart = () => {
    return {
        type: RESET_CHART
    }
}

