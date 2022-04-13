/*Sobre esta lista, realiza lo siguiente:
*/
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
const explorers = require('./list.js')
console.log("Imprimiendo los nombres de los explorers")
explorers.forEach(explorers => console.log(explorers.name))
//Imprime el stack de cada explorer, usa FOR EACH
console.log("Imprimiendo el stack de los explorers")
explorers.forEach(explorers => console.log(explorers.stack))
//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Creando lista con los stack de cada explorer")
const newList = explorers.map(function(explorers){ return explorers.stack})
console.log(newList)
//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Lista de explorers con stack 'js'")
const filterJs = explorers.filter((explorers) => explorers.stack.includes('js'))
console.log(filterJs)
//Busca el primer explorer que sea de la CDMX, usa FIND
console.log("El primer explorer de la CDMX es:")
const findCDMX = explorers.find((explorers) => explorers.city = "CDMX")
console.log(findCDMX)
//Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Suma de todos los ejercicios completos:")
const sumaExercises = explorers.reduce((a, explorers) => explorers.exercises_completed + a, 0)
console.log(sumaExercises)
//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("Si al menos un explorer tiene propiedad exercisesFinished:")
const finishedFrontend = explorers.some((explorers) => explorers.missions.frontend.isFinished === true)
console.log(finishedFrontend)
//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("Si todos los explorers tienes propiedad isFinished del onboarding como true:")
const finishedOnboarding = explorers.every((explorers) => explorers.missions.onboarding.isFinished === true)
console.log(finishedOnboarding)

