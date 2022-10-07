
 import React from 'react';
 const AddToLS = (id) => {

 // first time declare a varible ,to reserved the value like as object
  let shoppingCart = {} ;

 //get the shopping cart from LS and count 
 const storedCart = localStorage.getItem('shoppingCart');
 if(storedCart){
  shoppingCart = JSON.parse(storedCart);
 }
 else{
 shoppingCart = {}
 }

 //add the quantity 
  const quantity = shoppingCart[id];
  if(quantity){ 
       const newQuantity = quantity + 1;
       shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }
   localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
  
 }
 
 // Make the function to remove data From Ls 
 // recieved from Shop.js 
 const DeleteFromLs = id => {
  const storedCart = localStorage.getItem('shoppingCart');
  if(storedCart){
    const newStoredCart = JSON.parse(storedCart);
    if(id in newStoredCart){
      delete newStoredCart[id];
      localStorage.setItem('shoppingCart',JSON.stringify(newStoredCart))
    }
  }
}


// make the function to show the previous data from = LS 
 const getStoredCart = () => {
  let shoppingCart = {} ;

  //get the shopping cart from LS and count 
 const storedCart = localStorage.getItem('shoppingCart');
 if(storedCart){
  shoppingCart = JSON.parse(storedCart);
 }
  return shoppingCart;
  }
 
 export  {
   AddToLS ,
   DeleteFromLs,
   getStoredCart
  };

