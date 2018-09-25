import { combineReducers } from 'redux';
import products from './products';
import notify from './notify';
import cart from './cart';

const appReducers = combineReducers({
  products,
  notify,
  cart
});

export default appReducers