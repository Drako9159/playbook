const UserService = require('../services/UserService.js')
class UserView {
    static createUser(payload, name, username, id){
        if(payload == null){
            return UserService.payloadNull(payload)
        }else{
            name = payload.name
            username = payload.username
            id = payload.id
            return UserService.payloadObjet([payload], name, username, id)
        }
    }
}
module.exports = UserView




