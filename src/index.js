/**
 * Desafio: escrever uma função que receba um numero, e retorne o valor deste numero na sequencia de Fibonacci
 * A sequencia de Fibonacci é a sequencia de números onde cada termo corresponde a soma dos dois anteriores
 * Mais detalhes em: https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `fibonacci(4)` retorna `5`
 * @param n numero da sequencia desejada (1 <= n <= 50)
 * @returns valor da sequencia
 */

//Haila Mello Teste Técnico Totvs

function fibonacci(n) {
  let i = 1;
  let retorno = 0;
  let anterior1 = 0;
  let anterior2 = 1;

  //Realiza as atribuicoes de valores de acordo com a fórmula de Fibonacci
  while (i <= n) {
    i++;

    retorno = anterior1 + anterior2;
    anterior1 = anterior2;
    anterior1 = retorno;
  }
  return retorno;
}

module.exports = fibonacci;
