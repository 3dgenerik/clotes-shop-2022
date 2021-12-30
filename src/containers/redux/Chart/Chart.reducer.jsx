import { items } from "../../../items";
import { SET_CHART_VALUE, RESET_CHART, RESET_FOUND, CHART_QUANTITY_INCREMENT, CHART_QUANTITY_DECREMENT, REMOVE_SELECTED_ITEM} from "../constants";

const initial_state = {
    items: [],
    count: 0,
    sum:0,
    inList: false
}

const checkIfItemExists = (name, items) => {
    for(let item of items){
        if(name === item.name){
            console.log('Item is alredy in the list.')
            return true;
        }
    }
    return false;
}

export const setChart = (state = initial_state, action = {}) => {
    
    // console.log('STATE ITEMS: ', state.items);
    
    switch(action.type){
        case SET_CHART_VALUE:
            
            if(typeof action.payload === 'object'){
                if(action.payload.length !== 0)
                    console.log('REDUCES: ', action.payload.price);
            }

            const found = checkIfItemExists(action.payload.name, state.items);

            return {
                ...state,
                items:found ? [...state.items] : [...state.items, action.payload],
                count: found ? state.count : state.count + 1,
                sum: found ? state.sum : state.sum + action.payload.price,
                inList: found
            }
        
            case REMOVE_SELECTED_ITEM:

                return{
                    ...state,
                    items: [...state.items.filter(item => {return item.name !== action.payload})],
                    // sum: [...state.items.map(item => item.price)].reduce((res, acc) =>{return res + acc}, 0),
                    // sum: state.sum - action.payload.price,
                    count: state.count - 1
                
                }

        case RESET_CHART:
            return{
                ...state,
                items:[],
                count: 0,
                sum:0,
                inList: false
            }
        case RESET_FOUND:
            return{
                ...state,
                inList:false
            }

        default:
            return state;
    }
}