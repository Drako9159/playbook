class userTwitter {
  constructor(user, trending_topic, hashtag) {
    this.user = user;
    this.trending_topic = trending_topic;
    this.hashtag = hashtag;
  }
}
getTrending = (newUser) => {
  return `Lo trending del día es "${newUser.trending_topic}"`
},
getHashtag = (newUser) => {
  return `El hashtag del día es ${newUser.hashtag}`
}
const newUser = new userTwitter('@Drako9159','Guerra en Ucrania', '#ViernesSanto')
console.log("User: " + newUser.user)
console.log(getTrending(newUser))
console.log(getHashtag(newUser))
   