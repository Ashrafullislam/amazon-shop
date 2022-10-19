import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import Logo from '../../images/Logo.svg';
import './header.css' ;

const Header = () => {
    const {user,LogOut} = useContext(AuthContext)
    return (
        <nav className='header'>
         <div className='navbar'>
          <img src={Logo} alt="logo" />  
           <div className='menu'>
           
          <NavLink to='/order' > Order </NavLink>
          <NavLink to='/shop' > Shop </NavLink>
          <NavLink to='/inventory' > Inventory </NavLink>
          <NavLink to='/about' > About </NavLink>

          {user?.uid?

          <button onClick={LogOut} className='logOut-btn' > Log Out  
            </button>
           :
           <>
            <Link to='/login' > Log in </Link>
            <Link to='/signup' > Sign  up </Link>

           </>

          }
          
          </div>
         </div>
        
        </nav>
    );
};

export default Header;