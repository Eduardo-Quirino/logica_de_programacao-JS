/*Pedir para 0 usuário digitar um número e depois  a tabuada desse número de 1 a 10.
 */

//FOR
alert("Tabuada de Multiplicação");
let num = prompt("Digite o multiplicador: ");
num = parseFloat(num);

//repita até que indice seja <=10
for (let i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}

document.write("<br>" + "saiu do loop");
