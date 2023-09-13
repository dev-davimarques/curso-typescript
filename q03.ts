// Questão 03: Criar uma função que receba uma string como parâmetro e retorne essa string invertida

function inverterString(texto: string): string {
    let invertida: string = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      invertida += texto[i];
    }
    return invertida;
  }
  
  let texto: string = "Davi";
  let resul: string = inverterString(texto);
  console.log(resul);  // Saída: "!odnum ,álO"
  