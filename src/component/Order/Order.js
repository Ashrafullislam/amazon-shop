import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import { DeleteFromLs } from '../AddToLS/AddToLS';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import  './Order.css';

const Order = () => {
    // receive data and show the order product : call the hook 
    const {products,initialCart} = useLoaderData();
    const [ cart, setCart ] = useState(initialCart);

    const RemoveProduct = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        //to remove from localstorage call the function 
        DeleteFromLs(id);

    }
       return (
        <div className='shop'>
            <div className="order-container">
              {
                cart.map(product => <ReviewProduct key={product.id} product ={product}
                RemoveProduct = {RemoveProduct}
                > </ReviewProduct> )
              }
            </div>
             <div className="cart-container">
              <Cart cart ={cart}>  </Cart>
             </div>
        </div>
    );
};

export default Order;