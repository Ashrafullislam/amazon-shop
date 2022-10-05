import React from 'react';

const Storage = (id) => {
    //store the multiple id like an object 
    let shoppingCart ;

   //find the stored cart and set 
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
        // localStorage.setItem(id,1)
    }
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));

};

export default Storage;