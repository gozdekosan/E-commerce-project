import axiosInstance from '../api/AxiosInstance.js';

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';


export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });


export const fetchRoles = () => {
    return async (dispatch, getState) => {
        if (getState().client.roles.length > 0) {
            console.log("Roles already fetched, skipping.");
            return;
        }

        try {
            const response = await axiosInstance.get('/roles');
            dispatch(setRoles(response.data));
            console.log("Roles fetched successfully.");
        } catch (error) {
            console.error("Failed to fetch roles:", error);
        }
    };
};