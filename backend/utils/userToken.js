const jwt = require('jsonwebtoken')
require('dotenv').config()


const createtoken = (username)=>{
    jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: username
      }, process.env('TOKEN_SECRET'));
}


const decryptToken = (token)=>{
    try {
        const decoded = jwt.verify(token, process.env('TOKEN_SECRET'));
        return decoded
      } catch(err) {
        throw new Error(err)
      }
}


module.exports = { createtoken, decryptToken }