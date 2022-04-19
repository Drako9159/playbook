class User{
    
    /*Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }*/
    /*Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`*/
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    /*Requerimiento 3: getters*/
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
    //Requerimiento 5:
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(newBio){
        this.bio = newBio
    }
}
module.exports = User