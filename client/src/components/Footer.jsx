import React from 'react'
import Logo from '../img/logo.jpg'
const Footer = () => {
  return (
    <>
      <footer className='py-2 px-5 flex flex-row justify-between border-amber-600 border-1'>
        <div className='w-35 h-35 m-5 p-3 text-center border-2'><img className='w-100' src={Logo} alt="logo" /></div>
        <div className='w-20 h-20 m-5 p-3 text-center border-2'></div>
        <div className='w-20 h-20 m-5 p-3 border-2'></div>
        <div className='w-20 h-20 m-5 p-3 border-2'></div>
        <div className='w-20 h-20 m-5 p-3  border-2'></div>
      </footer>
    <div className='flex items-center justify-center'>questo è il Footer</div>
    </>
  )
}

export default Footer
