const user = {
    name: "Antonio Jaramillo",
    user: "@Drako9159",
    username: "drako9159",
    bio: "full stack developer",
    age: 25,
    getGeneralInfo: function(){
      return `This account ${this.username} has bio "${this.bio}"`
    },
    getEdad: function(){
      return `${this.name} is ${this.age} years old`
    }
   }
   console.log("Username:" + user.user)
   console.log(user.getGeneralInfo())
   console.log(user.getEdad())