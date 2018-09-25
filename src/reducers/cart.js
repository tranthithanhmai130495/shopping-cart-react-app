import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';

let defaultState = [];
let catItems = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOACAL_STOGARE));
defaultState = (catItems !== null && catItems.length > 0) ? catItems: defaultState;

const carts = (state = defaultState, action) => {
    switch(action.type) {
        case types.BUY_PRODUCT:
            return state;

        case types.UPDATE_PRODUCT:
            return state;

        case types.REMOVE_PRODUCT:
            return state;
            
        default:
            return state;
    }
}

export default carts;