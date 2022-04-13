const user = {
    user: "Antonio",
    profileType: "traveler",
    bio: "full stack developer",
    age: 25,
    travels: 12,

    getGeneralInfo: function(){
      return `This account ${this.user} is type "${this.profileType}"`
    },
    getEdad: function(){
      return `${this.user} is ${this.age} years old`
    },
    getTravels: function(){
        return `${this.user} has traveled ${this.travels} times in month`
      }
   }
   console.log("Username:" + user.user)
   console.log(user.getGeneralInfo())
   console.log(user.getEdad())
   console.log(user.getTravels())