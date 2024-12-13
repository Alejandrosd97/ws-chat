import React, { useState } from 'react'
import '../App.css'


const Usernameform = () => {
    const [username, setUserName] = useState('')
    const [error, setError] = useState(false)

    const handleChange =(e)=>{
        setUserName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (username) {
          fetch(`http://localhost:3000/user?username=${username}`)
          .then(res=> {
            if (res.status == 404){
              setError(true) 
            }
            else{
              return res.json()
              
            }
          })
          .catch(error=> console.log(error))
        }}

  return (
    <>
     <dialog open>
        <div className="main">
            <div className="main-header">Chat en Tiempo Real</div>
            <div className="room-options">
                <input required name='username' onChange={(e)=>handleChange(e)} id="input-username" type="text" placeholder="Introduce un nombre de usuario"/>
                { error && <span>This username is already in use</span>}
                <button onClick={(e)=>handleSubmit(e)} id="send-btn">Create</button>
            </div>
        </div>
    </dialog>
    </>
  )
}

export default Usernameform