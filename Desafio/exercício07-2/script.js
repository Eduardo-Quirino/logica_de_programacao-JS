/*
Para este exercício, mostre na tela todos os anos a partir de 1004 até o ano 2023, pulando de quatro em quatro anos.

Por exemplo:

    1004

    1008

    1012

E assim por diante.

É como mostrar os anos bissextos, mas sem as regras para descobrir se um ano é bissexto ou não. (vamos imaginar que se o ano é múltiplo de quatro, ele é bissexto).
*/

let ano = 1004;

while (ano <= 2023) {
  if (!(ano % 100 === 0) || ano % 400 === 0) {
    document.write(ano + "<br>");
  } else {
    document.write(ano + " não é bissexto <br>");
  }
  //ano = ano + 4
  ano += 4;
}
