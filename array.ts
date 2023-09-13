// array de number
const array: Array<number> = [1,2,3,4] // 1º forma de tipar um array
console.log(array[0])
console.log('------')

// array de string
const stringArray: string[] = ['a','b','c','d'] // 2º forma de tipar um array, essa é mais usada
console.log(stringArray.length)
console.log('------')

// adicionando elementos ao array
console.log('Array original ',array)
array.push(10)
console.log('Array com novo elemento ',array)
console.log('------')

// retirar último elemento do array
console.log('Novo array', array)
array.pop() // pop remove sempre o último elemento, então é uma função sem passar parâmetro
console.log('Array -1 elemento ',array)
console.log('------')

// adicionando nomes ao array
const names: string[] = [];
names.push("Dylan")
names.push("Davi")
console.log(names)
console.log('------')

// readonly
// const nomes: readonly string[] = ["Thomaz"];
// nomes.push("Jack")
// Property 'push' does not exist on type 'readonly string[]'.