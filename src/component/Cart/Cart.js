import React, { useState } from 'react';

import './Cart.css';

const Cart = (props) => {
    //cart return an array ,so apply the for loop to find the each item 

   const {cart} = props;
  

   let total = 0;
   let shipping = 0;

   for( const item of cart){
    total = total + item.price;
    shipping = shipping + item.shipping;
    // console.log(item.price)
    
   }
   // if need to show the tax with price 
   //const tax = total * 10/100;
   const tax = parseFloat((total * 0.1).toFixed(2)) ;
  const grandTotal = total + shipping + tax;
   
    return (
        <div>
        <h3> Order Details </h3>
        <p> Selected Items: {cart.length}  </p>
        <p> Total Price: $ {total}  </p>
        <p> Total Shipping Carges: $ {shipping}  </p>
        <p> Tax: $ {tax}  </p>
        <h3> Grand Total: $ {grandTotal} </h3>  
        
        <div className='order-check-btn'>
          <button   className='checkout-btn' > Proceed Checkout </button>
          <button className='clear-cart-btn'> Clear Cart </button>
        </div>
        
        </div>
    );
};

export default Cart;
      