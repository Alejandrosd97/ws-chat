import React, { useState } from 'react'
import '../App.css'


const SalaForm = ({setNext}) => {
    const [sala, setSala] = useState('')
    const [error, setError] = useState(false)

    const handleChange =(e)=>{
        setSala(e.target.value)
    }

    const handleSubmitSala = (e, url)=>{
        e.preventDefault()
          fetch(url)
          .then(res=> {
            if (res.status == 404){
                setError(true) 
            }
            else{
                setNext(true)
                return res.json()
            }
          })
          .catch(error=> console.log(error))
        }

  return (
    <dialog open>
        <div className="main">
    <div className="main-header">Chat en Tiempo Real</div>
        <div className="room-options">
            <input required onChange={(e)=>handleChange(e)} id="input-username" type="text" placeholder="Introduce un nombre de usuario"/>
            { error && <span>La sala no existe</span>}
            <button onClick={(e)=>handleSubmitSala(e, `http://localhost:3000/create-room?room=${sala}`)} id="send-btn">Create</button>
            <button onClick={(e)=>handleSubmitSala(e, `http://localhost:3000/search-room?room=${sala}`)} id="send-btn">Join an existing room</button>
        </div>
        </div>
    </dialog>
  )
}

export default SalaForm