//Pedir para 0 usuário digitar um número e depois  a tabuada desse número de 0 a 1000.

alert("Tabuada de Multiplicação");
let num = prompt("Digite o multiplicador: ");
num = parseFloat(num);

let indice = 0;

//repita até que indice seja <=1000
while (indice <= 1000) {
  document.write(num + " x " + indice + " = " + num * indice + "<br>");

  if (indice % 10 === 0 && indice > 0) {
    document.write("<hr>");
  }
  indice = indice + 1;
}
document.write("saiu do loop");
