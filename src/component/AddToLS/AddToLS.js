
 import React from 'react';
 
 const AddToLS = (id) => {
  console.log(id)
// first time declare a varible ,to reserved the value like as object
  let shoppingCart = {};
  const quantity = shoppingCart[id];
  if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  else{
    shoppingCart[id] = 1;
  }


   localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))

 };
 
 export default AddToLS;
