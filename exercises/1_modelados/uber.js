const user = {
    user: "Antonio Jaramillo",
    profileType: "traveler",
    travel: "Estado de México",

    getTravel: function(){
      return `Viajó a ${this.travel}"`
    },
    getType: function(){
      return `Usuario ${this.profileType}: ${this.user}`
    },
   }

   console.log("Username :" + user.user)
   console.log(user.getType())
   console.log(user.getTravel())
  