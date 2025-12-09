import { 
    SET_USER_INFO, 
    SET_LOGIN_LOADING, 
    SET_LOGIN_ERROR, 
    USER_LOGOUT 
} from "../constants/loginConstants"; 

const initialState = {
    user: {},
    isLoggedIn: false,
    loading: false,
    error: null, 
    token: localStorage.getItem('token') || null, 
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_USER_INFO:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                loading: false,
                error: null,
                token: localStorage.getItem('token'), 
            };
            
        case SET_LOGIN_LOADING:
            return {
                ...state,
                loading: action.payload,
                error: null, 
            };
            
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload, 
                isLoggedIn: false, 
                user: {},
                token: null,
            };
            
        case USER_LOGOUT:
         
            return initialState;
            
        default:
            return state;
    }
};

export default loginReducer;