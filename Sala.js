import User from "./User"


class Sala {
    constructor(name){
        this.name = name
        this.users = []
    }

    addUser = (user)=>{
        const username = this.users.filter((u)=>{
            u.username == user
        })
        if (!username){
            newUser = new User(user)
            this.users.push(user)
            return newUser
        }
        else {
            throw new Error("Elige otro nombre")
        }
    }
}