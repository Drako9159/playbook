const UserService = require('../../app/services/UserService.js')

describe("Test for UserService", () => {
    /*Requerimiento 1*/
    test("1 Create a new user using the UserService", () => {
        const user = UserService.create(1, "drako9159", "Antonio")

        expect(user.username).toBe("drako9159")
        expect(user.name).toBe("Antonio")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    /*Requerimiento 2*/
    test("2 Get all user data in a list", () => {
        const user = UserService.create(1, "drako9159", "Antonio")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("drako9159")
        expect(userInfoInList[2]).toBe("Antonio")
        expect(userInfoInList[3]).toBe("No bio")
    })
    /*Requerimiento 3*/
    test("3 Update username", () => {
        const user = UserService.create(1, "drako9159", "Antonio")
        UserService.updateUserUsername(user, "Drako")
        expect(user.username).toBe("Drako")
    })
    /*Requerimiento 4*/
    test("4 Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "drako9159(1)", "Antonio")
        const user2 = UserService.create(1, "drako9159(2)", "Antonio")
        const user3 = UserService.create(1, "drako9159(3)", "Antonio")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
       
        expect(usernames).toContain("drako9159(1)")
        expect(usernames).toContain("drako9159(2)")
        expect(usernames).toContain("drako9159(3)")
    })
})
