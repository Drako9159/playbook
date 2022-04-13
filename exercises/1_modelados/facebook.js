const user = {
    username: "Antonio Jaramillo",
    bio: "The older I get, the more I realize what really matters in life",
    age: 25,
    getGeneralInfo: function(){
      return `This account ${this.username} has bio "${this.bio}"`
    },
    getEdad: function(){
        return `${this.username} is ${this.age} years old`
      }
   }
   console.log("Username:" + user.username)
   console.log(user.getGeneralInfo())
   console.log(user.getEdad())