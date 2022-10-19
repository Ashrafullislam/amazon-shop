import  React , { useState } from 'react';
import { TrashIcon, } from '@heroicons/react/24/solid';

import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({cart,DeleteCart}) => {
const nevigate = useNavigate();
 
//Cart return an array ,so apply the for loop to find the each item 
   let quantity = 0;
   let total = 0;
   let shipping = 0;

   //default quantity 0
   for( const item of cart){ 
    quantity = quantity + item.quantity;
    total =   total + item.price  * item.quantity;
    shipping = shipping + item.shipping;
   }

   // if need to show the tax with price 
   //const tax = total * 10/100;
   const tax = parseFloat((total * 0.1).toFixed(2))  ;
   const grandTotal = total + shipping + tax;
   
    return (
        <div>
        <h3> Order Details </h3>
        <p> Selected Items: {quantity}  </p>
        <p> Total Price: $ {total}  </p>
        <p> Total Shipping Carges: $ {shipping}  </p>
        <p> Tax: $ {tax}  </p>
        <h3> Grand Total: $ {grandTotal} </h3>  
        
        <div className='order-check-btn'>
          <Link    to= '/order'> <button  className='checkout-btn'> Proced Checkout </button> </Link>
          <button onClick={DeleteCart}  className ='clear-cart-btn'> Clear Cart <TrashIcon className='delete-icon-cart'> </TrashIcon> </button>
        </div>
        
        </div>
    );
};

export default Cart;
      