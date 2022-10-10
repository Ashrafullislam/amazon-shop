
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import  { AddToLS, DeleteFromLs, getStoredCart } from '../AddToLS/AddToLS';
import Cart from '../Cart/Cart';
import Products from '../products/products';
import './Shop.css';

const Shop = () => {
  const products = useLoaderData()
    // load data from json 
    const [cart,setCart] = useState([]);
    const [prices,setPrice] = useState([0]);
       
    //pass the product data to product.js file and receive it button 
    const AddToCartHandlar = (product) => { 
        const {price,id } = product;
         
        let newCartFromLS = [];
        const exist = cart.find(newProduct  => newProduct.id === id )
      // !not equal falsy 
      if(!exist){
        product.quantity = 1;
        newCartFromLS = [...cart,product]
      } 
      else{
        const rest = cart.filter (newProduct => newProduct.id !== id)
        exist.quantity = exist.quantity + 1;
        newCartFromLS = [...rest,exist]
      }

       // give the peremeter id to set LS 
         AddToLS(id)       
        // set product quantity 
        setCart(newCartFromLS);
         //set price 
        const newPrice = parseInt(price) + parseInt(prices)
        setPrice(newPrice); 
}  

    // delete the data from LS receved id from Product.js
    const DeleteToCart = id =>{
      // send the id peremeter to AddToLS.js 
     DeleteFromLs(id)
    }

    // Load the function and and find the Data from localstorage 
    useEffect(()=> {
      const storedCart = getStoredCart();
    
      // create an empty array and resereve data 
      const savedCart = [];

       // use for in loop when want to find the element from an objects 
      for (const id in storedCart ){
        //compare the products id and for loop given id and find the selected item 
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
          //increse the quantity 
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
         
        }
        setCart(savedCart);
        
      }
     // products calls cases: every time call the useeffect and find the data
     //ekane products na dile ekbar call kore cole jabe,data pabena 
    },[products])

    
    // // load data from product.json 
    // useEffect(()=>{
    //   fetch('product.json')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    // },[])

    return (
       <div className='shop'>
        <div className="shop-container">
         {
         products.map(product => <Products product = {product} key = {product.id} AddToCartHandlar = {AddToCartHandlar}
          DeleteToCart = {DeleteToCart}
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