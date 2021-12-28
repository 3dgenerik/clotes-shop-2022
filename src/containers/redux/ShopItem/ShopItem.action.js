import { GET_ITEM_DETAILS } from "../constants";

export const itemDetails = (details) => {
    return{
        type: GET_ITEM_DETAILS,
        payload: details
    }
}