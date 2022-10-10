import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './header.css' ;

const Header = () => {
    return (
        <nav className='header'>
         <div className='navbar'>
          <img src={Logo} alt="logo" />  
           <div className='menu'>
          <Link to='/order' > Order </Link>
          <Link to='/shop' > Shop </Link>
          <Link to='/inventory' > Inventory </Link>
          <Link to='/about' > About </Link>

           {/* <Link to="/order"> Order </Link>
           <Link  to="/shop">Shop </Link>
           <Link  to="/inventory">Inventory </Link>
           <Link to="/about"> About </Link> */}
          </div>
         </div>
        
        </nav>
    );
};

export default Header;