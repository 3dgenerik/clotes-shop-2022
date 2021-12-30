import { GET_ITEM_DETAILS, DETAILS_QUANTITY_INCREMENT, DETAILS_QUANTITY_DECREMENT} from "../constants";

const initialState = {
    detailName: '',
    detailPrice: 0,
    detailImageUrl: '',
    detailsQuantity: 1
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
        case DETAILS_QUANTITY_INCREMENT:
            return {
                ...state,
                detailsQuantity: state.detailsQuantity + 1
            }
        case DETAILS_QUANTITY_DECREMENT:
            return {
                ...state,
                detailsQuantity: state.detailsQuantity <= 1 ? state.detailsQuantity : state.detailsQuantity - 1
            }
        default:
            return state;
    }
}