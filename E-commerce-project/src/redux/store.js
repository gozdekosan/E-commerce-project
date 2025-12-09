import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; 


import productReducer from './reducers/productReducer.js';
import loginReducer from './reducers/loginReducer.js';
import { clientReducer } from './reducers/clientReducer.js';
import { shoppingCartReducer } from './reducers/shoppingCartReducer.js';

const rootReducer = combineReducers({
  product: productReducer,    
  user: loginReducer,      
  client: clientReducer,     
  cart: shoppingCartReducer,  
});


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;