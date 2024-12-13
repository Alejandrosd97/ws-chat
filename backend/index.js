const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const cors = require('cors')
const Room = require('./Room.js');
const checkRoom = require('./utils/checkRoom.js');
const { createtoken } = require('./utils/userToken.js');



app.use(cors())
app.use(express.json())

const rooms = [new Room('123')]

app.get('/create-room', function(req, res){
    const {room} = req.query

    if (checkRoom(rooms, room)){
      res.status(400).json('Esta sala ya existe')
    }
    else{
      const newRoom = new Room(room)
      res.json(newRoom);
    }
});

app.get('/search-room', function(req, res){
    const {room} = req.query

    if (checkRoom(rooms, room)){
      res.json(room)
    }
    else{
      res.status(404).json('La sala no existe')
    }
    res.end();
  });

app.post('/user', (req, res)=>{
  const {username} = req.body
  if (checkUsername(username)){
    res.status(400).json('Este usuario ya existe')
  }
  else {
    const token = createtoken(username)
    res.json(token)
  }
  
  res.json(token)

})

app.ws('/chat/:room', function(ws, req) {
  const {room} = req.params

  ws.on('connection', (ws)=>{
  })

  ws.on('message', function(msg) {
    console.log(msg);
  });
});

app.listen(3000, ()=> console.log('funcionando backend en el puerto 3000'));

