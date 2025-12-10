import axiosInstance from "../../api/AxiosInstance.js";


export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';


export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORT_FILTER = 'SET_SORT_FILTER';
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'; 
export const SET_ACTIVE_PRODUCT = 'SET_ACTIVE_PRODUCT'; 



export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (list) => ({ type: SET_PRODUCT_LIST, payload: list });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (state) => ({ type: SET_FETCH_STATE, payload: state });


export const setCategoryFilter = (categoryId) => ({ type: SET_CATEGORY_FILTER, payload: categoryId });
export const setSortFilter = (sortValue) => ({ type: SET_SORT_FILTER, payload: sortValue });
export const setSearchFilter = (searchValue) => ({ type: SET_SEARCH_FILTER, payload: searchValue });


export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, payload: pageNumber });


export const setActiveProduct = (product) => ({ type: SET_ACTIVE_PRODUCT, payload: product });

export const fetchCategories = () => {
    return async (dispatch, getState) => {
        dispatch(setFetchState("FETCHING"));
        try {
            const response = await axiosInstance.get('/categories');
            const sortedCategories = response.data.sort((a, b) => b.rating - a.rating);
            dispatch(setCategories(sortedCategories));
            dispatch(setFetchState("FETCHED"));
        } catch (error) {
            dispatch(setFetchState("FAILED"));
            console.error("Failed to fetch categories:", error);
        }
    };
};

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        dispatch(setFetchState("FETCHING")); 
        
        const state = getState().product;


        const { category, sort, filter } = state.filterParams;
        const { currentPage, productsPerPage } = state; 
        const calculatedOffset = (currentPage - 1) * productsPerPage;

        const params = {
            limit: productsPerPage,   
            offset: calculatedOffset, 
        };
        

        if (category) params.category = category;
        if (sort) params.sort = sort;
        if (filter) params.filter = filter;
        
        try {
            const response = await axiosInstance.get('/products', { params });
            
            dispatch(setTotal(response.data.total)); 
            dispatch(setProductList(response.data.products)); 
            dispatch(setFetchState("FETCHED"));

        } catch (error) {
            dispatch(setFetchState("FAILED"));
            console.error("Failed to fetch products:", error);
        }
    };
};


export const fetchProductDetail = (productId) => {
    return async (dispatch, getState) => {
        dispatch(setFetchState("FETCHING")); 
        dispatch(setActiveProduct(null)); 
        
        try {
            const response = await axiosInstance.get(`/products/${productId}`);
            dispatch(setActiveProduct(response.data)); 
            dispatch(setFetchState("FETCHED"));

        } catch (error) {
            dispatch(setFetchState("FAILED"));
            console.error(`Failed to fetch product ${productId}:`, error);
        }
    };
};