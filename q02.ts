// Questão 02: Criar uma função que receba um array de números como parâmetro e retorne a soma de todos os elementos desse array

function somarNumeros (numeros: number[]){
    let soma: number = 0;
    for (let numero of numeros){
        soma += numero;
    }
    return soma;
}

let numeros: number[] = [1, 2, 3, 4, 5];
let result: number = somarNumeros(numeros);
console.log(result)