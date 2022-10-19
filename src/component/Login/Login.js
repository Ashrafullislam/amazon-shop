import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css';
import Icon from '../../images/google.png';

const Login = () => {
const {LogInUser,SignInWithGoogle} = useContext(AuthContext);
const [success,setSuccess] = useState(null);
const [error, setError] = useState(null);
// to navigate the current location after log in user go back previous place 
const navigate = useNavigate() ;
const location = useLocation()
const from = location.state?.from?.pathname || '/';

// make an handlar to log  in and log  out 
const handleLogIn = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password)
  LogInUser(email,password)
  .then((result) => {
    const user = result.user;
   console.log(user,'user login')
    setSuccess('Successfully Log in ')
    form.reset()
    // navigae from current location where was user 
    navigate(from, { replace: true }); 
   })
  .catch((error) => {
    const errorMessage = error.message;
    const errorCode = error.code;
    console.log(errorCode)
    setError(errorMessage);
   
  })
  
}
    return (
        <div className='form-container'>
            <h3> Log  in now </h3>
            <form onSubmit={handleLogIn} className='form'>
            <div className='form-login'>
                <label htmlFor="email" > Email </label>
                <input type="email" name="email" id=""  required placeholder='Enter your email'/>

            </div>

             <div className="form-login">
              <label htmlFor="password"> Password </label>
              <input type="password" name='password' required  placeholder='Enter your password'/>
             </div>
              {success && <span > {success} </span>  }
              {error && <span className='error'> {error} </span> }
             <input className='btn-submit' type="submit" value='Log in' />
             <p> -------------- Or ------------- </p>
             <button className='google-sign' onClick={SignInWithGoogle} > Log  in with  <img className='google' src={Icon} alt="google" />  </button>
             <p> New to amazon? <Link to= '/signup' >Create a new  account </Link>  </p>
            </form>
            
        </div>
    );
};

export default Login;