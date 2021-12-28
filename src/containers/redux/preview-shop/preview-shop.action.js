import { GET_COLLECTION } from "../constants";
import SHOP_DATA from "../../../shop.data";

export const collection = () => {
    return {
        type:GET_COLLECTION,
        payload: SHOP_DATA
    }
}