// Questão 01: Criar uma função que receba um número como parâmetro e retorne o quadrado desse número

function calcularQuadrado (numero: number): number {
    return numero*numero;
}

let resultado: number = calcularQuadrado(5)
console.log("O resultado da função de calcular o quadrado é ",resultado)