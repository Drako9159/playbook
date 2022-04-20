const User = require('../models/user.js')
/*Requerimiento 1*/
class UserService {
    static create (id, username, name){
        return new User(id, username, name, "No bio")
    }
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, username){
        user.username = username 
    }
    static getAllUsernames(usernames){
        const usersNames = usernames.map(function(users){ return users.username})
        return usersNames
    }
}
module.exports = UserService