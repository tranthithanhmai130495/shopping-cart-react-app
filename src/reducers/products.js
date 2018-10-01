import * as types from './../constants/ActionType';

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
        id: 'aplusatomation123456',
        name: 'aplus automation',
        image: 'aplusautomation.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 6,
        canBuy: true
    }, 
    {
        id: 'aplusmedia123456',
        name: 'aplus media',
        image: 'aplus-media.jpg',
        sumamry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 8,
        canBuy: false
    }
];

const products = (state = defaultState, action) => {
    switch(action.type) {
        case types.LIST_PRODUCT:
            return state;

        default:
            return state;
    }
}

export default products;