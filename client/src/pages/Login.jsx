import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='mt-10 p-5 bg-white rounded-4xl text-blue-900 flex flex-col items-center justify-center h-100vh w-full'>
      <h1 className='mb-3 text-green-800'>inserisci il tuo login</h1>
      <form className='flex flex-col items-center justify-center bg-white gap-5' action="">
        <input className='p-2 border-2 border-red-600 rounded-xl' required type="text" placeholder='username' />
        <input className='p-2 border-2 border-red-600 rounded-xl' required type="password" placeholder='password' />
        <button className='mb-2 p-2 rounded-3xl text-white w-[200px] bg-teal-500' type="submit">Login</button>
        <span className='text-xl text-teal-500'>Non hai un account?</span>
        <p className='text-xl text-teal-800'><Link to="/register"> Registrati</Link></p>
        </form> 
    </div>
    </>
  )
}

export default Login
