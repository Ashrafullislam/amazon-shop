import './App.css';
import React, { component }  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main/Main';
import Shop from './component/shop/Shop';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
import ProductsAndCartLoader from './component/ProductsAndCart-Loader/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {path: '/', 
    element: <Main> </Main>,children: [

      {path: 'order',
      loader :ProductsAndCartLoader ,
       element: <Order> </Order>},

      {path: 'shop',
      loader: () => fetch ('product.json'),
       element: <Shop > </Shop>},
      {path: 'inventory', element: <Inventory > </Inventory>},
      {path: 'about', element: <About > </About> }
      
    ]
  }
  ])
  return (
    <div className="apps">
     <RouterProvider router = {router}> </RouterProvider>
 
    
    </div>
  );
}

export default App;
