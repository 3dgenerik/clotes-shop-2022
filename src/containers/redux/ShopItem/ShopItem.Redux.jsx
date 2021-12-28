import { GET_ITEM_DETAILS } from "../constants";

const initialState = {
    detailName: '',
    detailPrice: 0,
    detailImageUrl: ''
} 

export const setItemDetails = (state = initialState, action = {}) => {
    switch(action.type){
        case GET_ITEM_DETAILS:
            const {name, price, imageUrl} = action.payload;
            return {
                ...state,
                detailName: name,
                detailPrice: price,
                detailImageUrl: imageUrl
            }
        default:
            return state;
    }
}