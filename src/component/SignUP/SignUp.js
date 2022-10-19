import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import google from '../../images/google.png';


const SignUp = () => {
const {CreateUser,SignInWithGoogle} = useContext(AuthContext);
const [success,setSuccess] = useState(null);
const [error,setError] = useState(null);

// make an handlar to create user 
const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value ;
    const password = form.password.value;
    const confirm = form.confirm.value;
    CreateUser(email,password,confirm)
    .then(result => {
       const user = result.user ;
       if(password !== confirm){
        setError('Your password didnt  match')
        return ;
       }
       setSuccess("Successfully create account ")
       form.reset() 
    })
    .catch(error => {
        const errorMessage = error.message ;
        setError(errorMessage)
    })
}


    return (
        <div className='form-container'>
            <h3> Sign up now  </h3>
            <form onSubmit={handleCreateUser } className='form'>
            <div className='form-login'>
                <label htmlFor="email" > Email</label>
                <input type="email" name="email" id=""  required placeholder='Enter your email'/>
            </div>

             <div className="form-login">
              <label htmlFor="password"> Password</label>
              <input type="password" name='password' required  placeholder='Enter your password'/>
             </div>

             <div className="form-login">
              <label htmlFor="confirm-password"> Confirm Password</label>
              <input type="password" name='confirm' required  placeholder='Enter confirm password'/>
             </div>

             {error && <span style={{color:'red'}}> {error} </span>}
             {success && <span style={{color:'blue'}} > {success} </span>}
             <input className='btn-submit' type="submit" value='Sign up' />
          
             <p> Already have an  acount ? <Link to = '/login' > Log in here</Link>  </p>
             <p>-------------------  Or -------------------</p>
              <button  onClick={SignInWithGoogle} className='google-sign ' > <img className='google' src={google } alt='google' />   </button>
            </form>
        </div>
    );
};

export default SignUp;