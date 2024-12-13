import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import SalaForm from './SalaForm';
import Usernameform from './Usernameform';



const Principal = () => {
  const [error, setError] = useState(false)
  const [next, setNext] =  useState(false)

  let navigate = useNavigate();

  console.log(next)

  return (
    <div className='center-container'>
        { !next && <SalaForm setNext={setNext}/>}
        { next && <Usernameform/>}
    </div>
  )

}
   
  



export default Principal