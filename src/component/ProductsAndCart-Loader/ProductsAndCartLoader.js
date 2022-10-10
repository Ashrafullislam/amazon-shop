import React from 'react';
import { getStoredCart } from '../AddToLS/AddToLS';

const ProductsAndCartLoader = async () => {
    //get product who is added the order summary

   const productsData = await fetch('product.json')
   const products = await productsData.json();
   
   //get the cart 
   const savedCart = getStoredCart();
   const initialCart = [];
   for (const id in savedCart){
      const addedProducts = products.find(product => product.id === id )
      // jodi addedProducts thake tahole quantity set kora hobe 
      if(addedProducts){
        const quantity  = savedCart[id];
        addedProducts.quantity = quantity;
        initialCart.push(addedProducts)

      }
    
   }

   return {products:products,initialCart:initialCart} ;
};

export default ProductsAndCartLoader;