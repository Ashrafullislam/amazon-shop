import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';

import './products.css';

const Products = (props) => {

    //receved peremeter  add and delete function from Shop.js 
    // return the perameter id to the shop.js onclik function
    const {AddToCartHandlar,DeleteToCart} = props;
  
     
    const {name, price, ratings, seller, img,id }  = props.product;

    return (
        <div className='product'>
            <img src={img} alt='shoe_picture' />
            
           <div className='product-info'>
           <p className='name'> {name}  </p>
            <div className='product-details'>
                  
             <h2>Price: {price} $ </h2>
             <h4> Seller: {seller} </h4>
             <h4 className='ratings'> Ratings: {ratings} Stars </h4> 
            </div>
           </div>

           <div className='add-cart-btn'> 
           <button  id='btn' onClick={() => AddToCartHandlar(props.product) }  className='button-cart'> Add to Cart  </button>

           <button  className='button-cart' onClick={()=> DeleteToCart(id)}> Delete Cart </button>
             
           </div>  
        </div>
    );
};

export default Products;