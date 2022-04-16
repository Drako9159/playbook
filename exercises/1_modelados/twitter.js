const user = {
    user: "@Drako9159",
    trending_topic: "Guerra en Ucrania",
    hashtag: "#ViernesSanto",
    
    getTrending: function(){
      return `Lo trending del día es "${this.trending_topic}"`
    },
    getHashtag: function(){
      return `El hashtag del día es ${this.hashtag}`
    }
   }
   console.log("User:" + user.user)
   console.log(user.getTrending())
   console.log(user.getHashtag())
