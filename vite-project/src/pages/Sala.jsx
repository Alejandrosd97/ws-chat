import React, { useEffect } from 'react'
import { useState } from 'react'
import '../sala.css'
import useWebSocket from 'react-use-websocket'
import { useParams } from 'react-router-dom'
import Message from './Message'

const Sala = () => {

    const [messages, setMessages] = useState([])
    const [textMsg, setTextMsg]= useState('')
    const {sala} = useParams()

    const socketUrl = `ws://localhost:3001/chat/${sala}`;

    const { sendMessage, lastMessage, readyState,} = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    shouldReconnect: (closeEvent) => true,
    });



    useEffect(() => {
        if (lastMessage !== null) {
        setMessages((prev) => prev.concat(lastMessage.data));
        }
    }, [lastMessage]);


    const writeMsg = (e)=>{
        setTextMsg(e.target.value)
    }
       

    const sendMsg = (e)=>{
        e.preventDefault()
        if (textMsg) {
            sendMessage(textMsg) 
            setTextMsg('')           
        }}
    
    
    const msgArray = messages.map((m)=>{
        return <Message text={m}/>
    })
        


  return (
    <div className="main-container">
        <div id="chat-header" className="chat-header">
            {sala}
        </div>
        <div className="chat-container">
            <div className="chat-messages" id="chatMessages">
                {msgArray}
            </div>
            <form className="chat-input">
                <input value={textMsg} onChange={(e)=>writeMsg(e)} type="text" placeholder="Escribe un mensaje..."/>
                <button type='submit' onClick={(e)=>sendMsg(e)}>Enviar</button>
            </form>
        </div>
    </div>  

  )
}

export default Sala