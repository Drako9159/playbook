const User = require('../models/user.js')
/*Requerimiento 1*/
class UserService {
    constructor(payload){
        this.error = payload
    }
}
module.exports = UserService