import React from 'react';
import Logo from '../../images/Logo.svg';
import './header.css'

const Header = () => {
    return (
        <nav className='header'>
         <div className='navbar'>
          <img src={Logo} alt="logo" />  
           <div className='menu'>
            <a href="/order"> Order</a>
            <a href="/order-review">Order Review</a>
            <a href="/manage">Manage Inventory</a>
            <a href="/login"> Log in</a>
          </div>
         </div>
        
        </nav>
    );
};

export default Header;