import { React,  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import Spinner from 'react-bootstrap/Spinner';



const PrivetRoute = ({children}) => { 
    const location = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Spinner animation="border" />;


    }
   
    if(user && user.uid){
        return children
    }
    return <Navigate to= '/login' state={{ from: location }} replace > </Navigate>
};

export default PrivetRoute; 