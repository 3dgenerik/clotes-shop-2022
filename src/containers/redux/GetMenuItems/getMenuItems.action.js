import { GET_MENU_ITEMS } from "../constants";
import {items} from '../../../items';

export const menuItems = () => {
    return {
        type:GET_MENU_ITEMS,
        payload: items
    }
}