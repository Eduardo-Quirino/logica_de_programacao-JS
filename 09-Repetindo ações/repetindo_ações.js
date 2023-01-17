//Pedir para 0 usuário digitar um número e depois  a tabuada desse número de 1 a 1000.

alert("Tabuada de Multiplicação");
let num = prompt("Digite o multiplicador: ");
num = parseFloat(num);

let indice = 1;

//repita até que indice seja <=1000
while (indice <= 1000) {
     document.write(num + ' x ' + indice + ' = ' + (num * indice) + '<br>');

     indice = indice + 1;

}
document.write('saiu do loop');

