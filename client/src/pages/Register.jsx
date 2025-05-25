import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

const Register = () => {
  const [values, setValues] = useState({
    nomePaziente: '',
    cognomePaziente: '',
    codFiscPaziente: '',
    dataNascita: '',
    luogoNascita: '',
    telefonoPaziente: '',
    emailPaziente: '',
    residenzaPaziente: '',
    viaPaziente: ''
  })
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    
    axios.post('/register', values)
    .then((res) =>{
      navigate('/')
      console.log(res)  
    })
    .catch((err) => console.log(err))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 p-5 text-3xl text-blue-900 flex flex-col items-center justify-center w-full">
          <p>INSERISCI DATI PAZIENTE</p> 
        </div>

        <div className="mt-10 mr-5 grid gap-6 mb-6 md:grid-cols-3">
          
          <div>
            <label htmlFor="nome" className="text-center block mb-2 text-xl font-medium text-gray-900">Nome</label>
            <input type="text" name="nomePaziente" onChange={(e) => setValues({...values, nomePaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="inserisci il nome" required />
          </div>

          <div>
            <label htmlFor="cognome" className="text-center block mb-2 text-xl font-medium text-gray-900">Cognome</label>
            <input type="text" name="cognomePaziente" onChange={(e) => setValues({...values, cognomePaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="inserisci il cognome" required />
          </div>
          <div>
            <label htmlFor="codfisc" className="text-center block mb-2 text-xl font-medium text-gray-900">Codice FIscale</label>
            <input type="text" name="codFiscPaziente" onChange={(e) => setValues({...values, codFiscPaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="inserisci il codice fiscale" required />
          </div>
          <div>
            <label htmlFor="datadinascita" className="text-center block mb-2 text-xl font-medium text-gray-900">data di nascita</label>
            <input type="text" name="dataNascita" onChange={(e) => setValues({...values, dataNascita: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="giorno/mese/anno" required />
          </div>

          <div>
            <label htmlFor="luogonascita" className="text-center block mb-2 text-xl font-medium text-gray-900">Luogo di nascita</label>
            <input type="text" name="luogoNascita" onChange={(e) => setValues({...values, luogoNascita: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="inserisci luogo di nascita" required />
          </div>

          <div>
            <label htmlFor="numtel" className="text-center block mb-2 text-xl font-medium text-gray-900">Num. di telefono</label>
            <input type="text" name="telefonoPaziente" onChange={(e) => setValues({...values, telefonoPaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="inserisci il numero di telefono" required />
          </div>
          <div>
            <label htmlFor="email" className="text-center block mb-2 text-xl font-medium text-gray-900">e-mail</label>
            <input type="email" name="emailPaziente" onChange={(e) => setValues({...values, emailPaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="inserisci email" />
          </div>
          <div>
            <label htmlFor="cittaresidenza" className="text-center block mb-2 text-xl font-medium text-gray-900">Città di residenza</label>
            <input type="text" name="residenzaPaziente" onChange={(e) => setValues({...values, residenzaPaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="città di residenza" required />
          </div>
          <div>
            <label htmlFor="viaresidenza" className="text-center block mb-2 text-xl font-medium text-gray-900">Via e num. civico</label>
            <input type="text" name="viaPaziente" onChange={(e) => setValues({...values, viaPaziente: e.target.value})} className="border border-gray-300 rounded-lg block w-full p-2.5" placeholder="via di residenza e numero" required/>
          </div>
        </div>

        <div className="mt-5 p-5 text-3xl text-blue-900 flex flex-col items-center justify-center w-full">
          <button type="submit" className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>Registra Paziente</button>
        </div>

      </form>

      
    </>
  );
};

export default Register;
