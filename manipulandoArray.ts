const arrayDeNumeros: number[] = [1,2,5,3]
const arrayDeNomes: string[] = ['Davi','Hugo','Diego']

const buscaNum = arrayDeNumeros.find(num => num > 2) // arrayDeNumeros.find(num => num === 4)
console.log(buscaNum)