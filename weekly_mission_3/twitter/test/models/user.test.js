const User = require('../../app/models/user.js')

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
})