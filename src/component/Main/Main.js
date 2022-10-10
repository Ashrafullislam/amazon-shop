import React from 'react';
import Shop from '../shop/Shop';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='main'>
        <Header> </Header>
         <Outlet > </Outlet>
            
        </div>
    );
};

export default Main;