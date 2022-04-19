const User = require('../../app/models/user.js')
/*Requerimento 1
describe("Unit tests for user class", () => {
    test('Create an User objet', () => {
        //Aquí se invoca el código que se va a usar en nuestra app
        const user = new User(1, "drako9159", "Antonio", "Bio", "dateCreated", "lastUpdated")
        //Se validan los resultados
        expect(user.id).toBe(1)
        expect(user.username).toBe("drako9159")
        expect(user.name).toBe("Antonio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})*/
/*Requerimento 2
describe("Unit tests for user class", () => {
    test('Create an User objet', () => {
        //Aquí se invoca el código que se va a usar en nuestra app
        const user = new User(1, "drako9159", "Antonio", "Bio")
        //Se validan los resultados
        expect(user.id).toBe(1)
        expect(user.username).toBe("drako9159")
        expect(user.name).toBe("Antonio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() //Verifica que el valor no se indefinido
        expect(user.lastUpdated).not.toBeUndefined()
    })
})*/
/*Requerimiento 3
describe("Unit tests for user class", () => {
    test('Add getters', () => {
        //Aquí se invoca el código que se va a usar en nuestra app
        const user = new User(1, "drako9159", "Antonio", "Bio")
        //Se validan los resultados
        expect(user.id).toBe(1)
        expect(user.getUsername).toBe("drako9159")
        expect(user.name).toBe("Antonio")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined() //Verifica que el valor no se indefinido
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})*/
/*Requerimiento 4*/
describe("Unit tests for user class", () => {
    test('Add getters', () => {
        //Aquí se invoca el código que se va a usar en nuestra app
        const user = new User(1, "drako9159", "Antonio", "Bio")
        //Se validan los resultados
        user.setUsername = "Drako"
        expect(user.username).toBe("Drako")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})
