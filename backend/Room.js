// import User from "./User"


class Room {
    constructor(name){
        this.roomName = name
        this.users = []
        this.connections = []
    }

    // addUser = (user)=>{
    //     const username = this.users.filter((u)=>{
    //         u.username == user
    //     })
    //     if (!username){
    //         newUser = new User(user)
    //         this.users.push(user)
    //         return newUser
    //     }
    //     else {
    //         throw new Error("Elige otro nombre")
    //     }
    // }
}

module.exports = Room