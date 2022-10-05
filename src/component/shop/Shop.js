
import React, { useEffect, useState } from 'react';
import AddToLS from '../AddToLS/AddToLS';
import Cart from '../Cart/Cart';
import Products from '../products/products';
import Storage from  '../storage/storage';  
import './Shop.css';
const Shop = () => {
    // load data from json 
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [prices,setPrice] = useState([0]);
    
   
    //pass the product data to product.js file and receive it button 
    const AddToCartHandlar = (product) => {
         const {price,id } = product;
       AddToLS(id)
        //  console.log(id)
       
        // set product quantity 
          const newCart = [...cart, product] ;
           setCart(newCart);
         //set price 
        const newPrice = parseInt(price) + parseInt(prices)
        setPrice(newPrice); 

    }
    
    useEffect(()=>{
      fetch('product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])
    return (
       <div className='shop'>
        <div className="shop-container">
         {
         products.map(product => <Products product = {product} key = {product.id} AddToCartHandlar = {AddToCartHandlar}
           > </Products>)
         }
       </div>

      <div className="cart-container">
        <Cart cart={cart}> </Cart>
        
       </div>
   </div>
    );
};

// set product from the props

export default Shop;