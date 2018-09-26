import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';

let defaultState = [
    {
        id: 'aplusatomation123',
        name: 'aplus automation',
        image: 'aplusautomation.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        canBuy: true
    }, 
    {
        id: 'aplusmedia123',
        name: 'aplus media',
        image: 'aplus-media.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 22,
        canBuy: false
    },
    {
        id: 'robo fig combo123',
        name: 'robo fig combo',
        image: 'robo_fig_combo.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 5,
        canBuy: true
    }, 
    {
        id: 'target leap frog123',
        name: 'target leap frog',
        image: 'target-leap-frog.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 10,
        canBuy: false
    },
    {
        id: 'aplusatomation123',
        name: 'aplus automation',
        image: 'aplusautomation.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 6,
        canBuy: true
    }, 
    {
        id: 'aplusmedia123',
        name: 'aplus media',
        image: 'aplus-media.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 8,
        canBuy: false
    }
];

let catItems = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOACAL_STOGARE));
defaultState = (catItems !== null && catItems.length > 0) ? catItems: defaultState;

const products = (state = defaultState, action) => {
    switch(action.type) {
        case types.LIST_PRODUCT:
            return state;

        default:
            return state;
    }
}

export default products;