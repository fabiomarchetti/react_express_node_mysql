import './App.css'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import ReactDom from 'react-dom/client';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';



import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  { path: "/", 
    element: <Layout />,
    children: [
      // { path: "/", element: <Home /> },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/single",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
  ]
  },
]);

function App() {
  return (
    <>
    <div className='m-5 p-5 border-2 border-teal-700'>
        <div className='p-3'>
          <RouterProvider router = {router} />
        </div>
      </div>

    {/* <div className=' flex flex-col items-center justify-center h-screen bg-sky-900 text-teal-500 text-3xl'>
      {array.map((fruit, index) => (
        
        <div key = {index}>
          <p className='p-3'>{fruit}</p>
        </div>
      )
      )}
    </div> */}
    </>
    );
}

export default App
