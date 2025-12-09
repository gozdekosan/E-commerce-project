export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';


/**
 * @param {Array} cartItems 
 */
export const setCart = (cartItems) => {
    return {
        type: SET_CART,
        payload: cartItems, 
    };
};

/**
 * @param {Object} paymentInfo 
 */
export const setPayment = (paymentInfo) => {
    return {
        type: SET_PAYMENT,
        payload: paymentInfo,
    };
};

/** 
 * @param {Object} addressInfo 
 */
export const setAddress = (addressInfo) => {
    return {
        type: SET_ADDRESS,
        payload: addressInfo,
    };
};