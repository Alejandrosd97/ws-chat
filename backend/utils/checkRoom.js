const checkRoom = (roomsArr, room )=>{
    return roomsArr.find((r)=>{
        console.log(r.roomName, room.toString())
        return r.roomName == room.toString()

      })
}



module.exports = checkRoom