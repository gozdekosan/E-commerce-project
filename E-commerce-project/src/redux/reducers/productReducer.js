import { 
    SET_CATEGORIES, 
    SET_PRODUCT_LIST, 
    SET_TOTAL,
    SET_FETCH_STATE,
    SET_CATEGORY_FILTER,
    SET_SORT_FILTER,
    SET_SEARCH_FILTER,
    SET_CURRENT_PAGE 
} from "../actions/ProductActions";

const initialState = {
    productList: [], 
    total: 0, 
    categories: [],
    fetchState: "NOT_FETCHED", 
    

    filterParams: {
        category: null,  
        sort: '',        
        filter: '',      
    },
    

    currentPage: 1,      
    productsPerPage: 12, 
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload,
            };
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload,
            };
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case SET_CATEGORY_FILTER:
            return {
                ...state,
                currentPage: 1, 
                filterParams: { ...state.filterParams, category: action.payload },
            };
        case SET_SORT_FILTER:
            return {
                ...state,
                currentPage: 1,
                filterParams: { ...state.filterParams, sort: action.payload },
            };
        case SET_SEARCH_FILTER:
            return {
                ...state,
                currentPage: 1,
                filterParams: { ...state.filterParams, filter: action.payload },
            };

        default:
            return state;
    }
};

export default productReducer;