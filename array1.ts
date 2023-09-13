// Questão 01: Criar uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números pares do array original.

function filtrarNumerosPares(numeros: number[]): number[] {
    let numerosPares: number[] = [];
    for (let numero of numeros) {
      if (numero % 2 === 0) {
        numerosPares.push(numero);
      }
    }
    return numerosPares;
  }
  
  let numerospares: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosPares: number[] = filtrarNumerosPares(numerospares);
  console.log(numerosPares);  // Saída: [2, 4, 6, 8, 10]
  