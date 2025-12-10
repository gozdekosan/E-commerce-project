import axiosInstance from "../../api/AxiosInstance.js"; 
import toast from 'react-hot-toast'; 
import { 
    SET_USER_INFO, 
    SET_LOGIN_LOADING, 
    SET_LOGIN_ERROR, 
    USER_LOGOUT 
} from "../constants/loginConstants";


export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, payload: userInfo });
export const setLoginLoading = (isLoading) => ({ type: SET_LOGIN_LOADING, payload: isLoading });
export const setLoginError = (error) => ({ type: SET_LOGIN_ERROR, payload: error });

export const userLogout = () => {

    localStorage.removeItem('token');
    return { type: USER_LOGOUT }; 
};


export const userLogin = (creds, navigate) => { 
    return async (dispatch) => {
        dispatch(setLoginLoading(true));
        dispatch(setLoginError(null));
        try {
            const response = await axiosInstance.post('/login', creds);
            const { token, user } = response.data; 

            localStorage.setItem('token', token);
            dispatch(setUserInfo(user));

            toast.success("Giriş Başarılı!");
            navigate('/'); 

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Giriş hatası. Bilgilerinizi kontrol edin.";
            dispatch(setLoginError(errorMessage));
            toast.error(errorMessage);

        } finally {
            dispatch(setLoginLoading(false));
        }
    };
};

export const verifyTokenAndLogin = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) return;

        dispatch(setLoginLoading(true));
        
        try {
            const response = await axiosInstance.get('/verify'); 
            dispatch(setUserInfo(response.data)); 

        } catch (error) {
            localStorage.removeItem('token'); 
            dispatch(userLogout()); 
            console.error("Token doğrulama başarısız:", error);
        } finally {
            dispatch(setLoginLoading(false));
        }
    };
};