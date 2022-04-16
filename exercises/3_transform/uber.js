class userUber{
  constructor(user, profileType, travel) {
    this.user = user
    this.profileType = profileType;
    this.travel = travel
  }
}
getTravel = (newUserUber) => {
  return `Viajó a "${newUserUber.travel}"`
},
getType = (newUserUber) => {
  return `Usuario ${newUserUber.profileType}: ${newUserUber.user}`
}
const newUserUber = new userUber('Antonio Jaramillo','traveler','Estado de México')
console.log("User: " + newUserUber.user)
console.log(getType(newUserUber))
console.log(getTravel(newUserUber))
   