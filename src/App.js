import './App.css';
import React  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main/Main';
import Shop from './component/shop/Shop';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
import ProductsAndCartLoader from './component/ProductsAndCart-Loader/ProductsAndCartLoader';
import Login from './component/Login/Login';
import SignUp from './component/SignUP/SignUp';
import PrivetRoute from './component/Route/PrivetRoute';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const router = createBrowserRouter([
    {path: '/', 
    element: <Main> </Main>,children: [
     
      {path: '/',

      loader: () => fetch ('product.json'),
       element: <Shop > </Shop>},
      {path: 'shop',
      loader: () => fetch ('product.json'),
       element: <Shop > </Shop>},
       
      {
        path: 'order',
      loader :ProductsAndCartLoader ,
       element:<PrivetRoute >  <Order> </Order> </PrivetRoute>
      },

      {
        path: 'inventory', element: <PrivetRoute >  <Inventory > </Inventory> </PrivetRoute>
      },

      {path: 'about', element: <About > </About> },
      {path: 'login', element: <Login > </Login> },
      {path: 'signup', element: <SignUp > </SignUp> }
      
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
