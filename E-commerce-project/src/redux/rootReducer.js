import { combineReducers } from 'redux';
import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

export const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
});