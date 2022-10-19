import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import Logo from '../../images/Logo.svg';
import './header.css' ;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

const Header = () => {
    const {user,LogOut} = useContext(AuthContext)

    return (
        <Navbar bg="dark" className='nav' expand="lg">
          
            <Navbar.Brand  > <img  className='logo' src= {Logo} alt= 'logo' /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <NavLink to='/order' > Order </NavLink>
              <NavLink to='/shop' > Shop </NavLink>
              <NavLink to='/inventory' > Inventory </NavLink>
              <NavLink to='/about' > About </NavLink>
              
              {user?.uid?
              <Button className='logOut-btn' onClick={LogOut} > Log Out  </Button>
                 :
                <>
              <NavLink to='/login' > Log In </NavLink>
              <NavLink to='/signup' > Sign Up </NavLink>
              </>

              }
              
              </Nav>
            </Navbar.Collapse>
        
        </Navbar>
      );

    
};

export default Header;