import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <div className='mt-10 p-5 bg-white rounded-4xl text-blue-900 flex flex-col items-center justify-center h-100vh w-full'>
      <h1 className='mb-3 text-green-800'>inserisci il tuo login</h1>
      <form className='flex flex-col items-center justify-center bg-white gap-5' action="">
        <input className='p-2 border-2 border-red-600 rounded-xl' required type="text" placeholder='username' />
        <input className='p-2 border-2 border-red-600 rounded-xl' required type="password" placeholder='password' />
        <input className='p-2 border-2 border-red-600 rounded-xl' required type="email" placeholder='email' />
        <button className='mb-2 p-2 rounded-3xl text-white w-[200px] bg-teal-500' type="submit">Registrati</button>
        <span className='text-xl text-teal-500'>Se sei già registrato</span>
        <p className='text-xl text-teal-800'><Link to="/login">vai al Login</Link></p>
        </form> 
    </div>
    </>
  )
}

export default Register