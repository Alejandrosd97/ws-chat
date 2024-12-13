const checkUsername = (usersArr, username)=>{
    return usersArr.find((u)=>{
        return u.username == username
    })
}



module.exports = checkUsername