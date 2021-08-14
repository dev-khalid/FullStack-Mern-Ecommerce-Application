import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer,productDetailsReducer } from './reducers/productReducers.js';
const reducer = combineReducers({
  productList: productListReducer,//productList contains loading, error, products
  productDetails: productDetailsReducer
});

const initialState = {}; //if we want something loaded when redux store starts then we can put it on initialState

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
