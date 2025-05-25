import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/meding-logo.png'

const Navbar = () => {
  return (
    <>
    
    

<nav class="bg-white border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/"><img className='w-[300px] m-3' src={Logo} alt="logo" /></Link>

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
    </button>



    <div class="bg-[#7cc8df] rounded-4xl w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4  mt-4  rounded-lg md:flex-row ">
        <li>
          <Link to="/" className="block py-2 px-3">Home</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3">Registra Paziente</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3">Cerca Paziente</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 px-3">Elenco pazienti</Link>
        </li>

        <li>
          <Link to="/register" className="block py-2 px-3">Login</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3">Logout</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

    

    )
}

export default Navbar


