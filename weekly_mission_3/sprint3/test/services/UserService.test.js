const UserView = require('../../app/views/UserView.js')

/* 
describe("Tests for UserView", () => {*/
    /*Requerimiento 1
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/usign-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })*/
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload)
    console.log(result.error)
    /*Requerimiento 2
    test("Return an error object when try to create a new user with an null payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/usign-matchers#strings
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })*/
    /*Requerimeinto 3
    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/usign-matchers#strings
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })*/
    /*Requerimiento 4
    test("Create a user by a given valid payload", () => {
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBE("username")
        expect(result.id).toMatch(1)
    })*/

/*

})*/



