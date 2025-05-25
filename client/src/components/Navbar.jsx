import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/meding-logo.png'

const Navbar = () => {
  return (
    <>
    
    

<nav className=" mx-[-13px] mt-[-14px]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/"><img className='w-[300px] m-3' src={Logo} alt="logo" /></Link>

    <div className="w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4  mt-4  rounded-lg md:flex-row ">
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
          <Link to="/" className="block py-2 px-3">Carica dati</Link>
        </li>

        <li>
          <Link to="/register" className="block py-2 px-3">Login</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3">Logout</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 px-3 text-red-800">Control Room</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

    

    )
}

export default Navbar


