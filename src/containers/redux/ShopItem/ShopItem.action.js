import { GET_ITEM_DETAILS, DETAILS_QUANTITY_INCREMENT, DETAILS_QUANTITY_DECREMENT } from "../constants";

export const itemDetails = (details) => {
    return{
        type: GET_ITEM_DETAILS,
        payload: details
    }
}

export const itemDetailsQuantityIncrement = () => {
    return{
        type: DETAILS_QUANTITY_INCREMENT
    }
}

export const itemDetailsQuantityDecrement = () => {
    return{
        type: DETAILS_QUANTITY_DECREMENT
    }
}