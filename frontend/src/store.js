import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer,productDetailsReducer } from './reducers/productReducers.js';
import {cartReducer} from './reducers/cartReducers'; 

const reducer = combineReducers({
  productList: productListReducer,//productList contains loading, error, products
  productDetails: productDetailsReducer, 
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []; 

const initialState = {
  cart: {cartItems: cartItemsFromStorage }
}; //if we want something loaded when redux store starts then we can put it on initialState

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
