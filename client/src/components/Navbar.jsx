import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.jpg'

const Navbar = () => {
  return (
    <div className='py-2 px-5 flex flex-row justify-between bg-teal-600 border-amber-600 border-2'>
        <div className=''>
          <Link to="/"><img className='w-[100px]' src={Logo} alt="logo" /></Link>
        </div>
        <div className=''></div>
        <div className='h-[70px] p-5 mx-5 bg-teal-600 flex flex-row justify-center gap-x-5'>
          <Link className='text-white font-bold' to="/?cat=art">ART</Link>
          <Link className='text-white font-bold' to="/?cat=science">SCIENCE</Link>
          <Link className='text-white font-bold' to="/?cat=technology">TECHNOLOGY</Link>
          <Link className='text-white font-bold' to="/?cat=cinema">CINEMA</Link>
          <Link className='text-white font-bold' to="/?cat=design">DESIGN</Link>
          <Link className='text-white font-bold' to="/?cat=food">FOOD</Link>
          <span className='text-white font-bold'>John</span>
          <Link to="/login" className='text-white font-bold'>Login</Link>
          <Link className='text-yellow-400 font-bold' to="/write">Write</Link>
        </div>
    </div>
  )
}

export default Navbar


