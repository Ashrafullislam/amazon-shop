import React from 'react';
import './ReviewProduct.css';
import { TrashIcon, } from '@heroicons/react/24/solid'


const   ReviewProduct = ({product,RemoveProduct}) => {
    const {img,name,price,shipping ,id,quantity} = product;
    
    return (
    <div className='product-review'>
        <div className='product-img-div'>
            <img className='product-image' src={img} alt =" product-img "/>
         </div>

        <div className='product-review-container'>
           <div className='order-text'>
             <h3> {name} </h3>
             <p> Price: <span> $<b> {price} </b>  </span> </p>
             <p> Shipping Charge: <span> $<b> {shipping}</b> </span> </p>
             <p>Quantity: {quantity} </p>
             
           </div>
            <div className='product-delete-icon'>
             <button className='delete-button'>  <TrashIcon  onClick={()=>RemoveProduct(id)} className='delete-icon '> </TrashIcon> </button>
             </div>
        </div>
    </div>
    );
};

export default ReviewProduct;