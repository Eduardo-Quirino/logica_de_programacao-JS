/*Pedir para 0 usuário digitar um número e depois  a tabuada desse número de 1 a 10.
 */

//do while
alert("Tabuada de Multiplicação");
let num = prompt("Digite o multiplicador: ");
num = parseFloat(num);

let indice = 1;

//repita até que indice seja <=1000
do {
  document.write(num + " x " + indice + " = " + num * indice + "<br>");

  indice = indice + 1;
} while (indice <= 10);
document.write("<br>" + "saiu do loop");
