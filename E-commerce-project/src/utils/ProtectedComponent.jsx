import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedComponent = ({ children }) => {

    const token = useSelector(state => state.client.token); 
    const isLoggedIn = !!token; 

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedComponent;