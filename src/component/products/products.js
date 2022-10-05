import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import './products.css';

const Products = (props) => {
    // console.log(props.product);
    const {AddToCartHandlar} = props; 
     
    const {name, price, ratings, seller, img }  = props.product;

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
           </div>;

           <div className='add-cart-btn'>
           <button id='btn' onClick={() =>AddToCartHandlar(props.product)}  className='button-cart'> Add to Cart  </button> 
             
           </div>  
        </div>
    );
};

export default Products;