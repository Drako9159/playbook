class userFacebook {
  constructor(user, post, bio) {
    this.user = user;
    this.post = post;
    this.bio = bio;
  }
}
getPost = (newUser) => {
  return `Mi post es "${newUser.post}"`
},
getBio = (newUser) => {
  return `Biography by ${newUser.user}: "${newUser.bio}`
}
const newUser = new userFacebook('Antonio Jaramillo','Ya te quiero volver a ver', 'The older I get, the more I realize what really matters in life')
console.log("User: " + newUser.user)
console.log(getPost(newUser))
console.log(getBio(newUser))
