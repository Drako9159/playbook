
class userGit {
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
}
getTotalIssues = (newUser) => {
  return newUser.issues_open + newUser.issues_close
},
getGeneralInfo = (newUser) => {
  return `This repository ${newUser.name} was created by ${newUser.author}`
}
const newUser = new userGit('LaunchX','carlogilmar', 'JavaScript', 100, 199, 299, 10, 10)
console.log("Nombre del repo: " + newUser.name)
console.log("Issues totales: " + getTotalIssues(newUser))
console.log(getGeneralInfo(newUser))
   