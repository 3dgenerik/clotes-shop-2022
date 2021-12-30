import { SET_CHART_VALUE, RESET_CHART, RESET_FOUND, CHART_QUANTITY_INCREMENT, CHART_QUANTITY_DECREMENT, REMOVE_SELECTED_ITEM} from "../constants";

export const chart = (value) => {
    return {
        type: SET_CHART_VALUE,
        payload:{...value, quantity:1}
    }
}

export const resetChart = () => {
    return {
        type: RESET_CHART
    }
}

export const resetFound = () => {
    return {
        type: RESET_FOUND
    }
}

export const chartQuantityIncrement = () => {
    return {
        type: CHART_QUANTITY_INCREMENT
    }
}

export const chartQuantityDecrement = () => {
    return {
        type: CHART_QUANTITY_DECREMENT
    }
}

export const removeItem = (values) => {
    return {
        type: REMOVE_SELECTED_ITEM,
        payload:values
    }
}


