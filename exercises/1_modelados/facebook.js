const user = {
    user: "Antonio Jaramillo",
    post: "Ya te quiero volver a ver",
    bio: "The older I get, the more I realize what really matters in life",
    
    getPost: function(){
      return `Mi post es "${this.post}"`
    },
    getBio: function(){
        return `Biography by ${this.user}: "${this.bio}"`
      }
   }
   console.log("Username :" + user.user)
   console.log(user.getPost())
   console.log(user.getBio())