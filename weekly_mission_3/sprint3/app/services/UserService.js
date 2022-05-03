const User = require('../models/user.js')
/*Requerimiento 1*/
class UserService {
    //Requerimiento1//
    static payloadNull(payload){
        const findUser = payload.some((a) => a.username === "Username")
        payload = "payload no existe"
        return new User(payload)
    }
    


    static payloadObjet(payload, name, username, id){
       //Requerimiento2//
        const findNull0 = payload.some((a) => a.username === null)
        const findNull1 = payload.some((a) => a.name === null)
        const findNull2 = payload.some((a) => a.id === null)
        const regla = [findNull0, findNull1, findNull2]
        const result = regla.some((b) => b === true)
        if(result === true){
            payload = "necesitan tener un valor válido"
            return new User(payload)
        }
        //Requerimiento3//
        const findUser = payload.some((a) => a.username === "Username")
        if(findUser == true){
            payload = "necesitan tener un valor válido"
            return new User(payload)
        }
        //requerimiento4//
        return new User(payload, name, username, id)
    } 
    
    
}

module.exports = UserService