import { GET_MENU_ITEMS } from "../constants";

export const menuItems = (items) => {
    return {
        type:GET_MENU_ITEMS,
        payload: items
    }
}