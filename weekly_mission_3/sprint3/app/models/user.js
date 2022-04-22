class User{
    constructor(payload, name, username, id){
        this.error = payload
        this.name = name
        this.username = username
        this.id = id
    }
}
module.exports = User