import { 
    SET_CART, 
    SET_PAYMENT, 
    SET_ADDRESS 
} from '../actions/shoppingCartActions.js';

const initialCartState = {
    cart: [], 
    payment: {}, 
    address: {}, 
};

export const shoppingCartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        
        case SET_CART:
            return { ...state, cart: action.payload };
    
        case SET_PAYMENT:
            return { ...state, payment: action.payload };

        case SET_ADDRESS:
            return { ...state, address: action.payload };
            
        default:
            return state;
    }
};
