//Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não. A nota de corte é 5.

alert('Calcule sua média de notas');

var n1 = prompt("Digite o  primeira nota:");//1° forma
n1 = parseFloat(n1);

var n2 = parseFloat(prompt("Digite o segunda nota:"));//2° forma

var media = (n1 + n2) / 2;

alert(media > 5);

if (media > 5) {
    alert("Aprovado" + " sua média foi: " + media)
} else {
    alert("Reprovado" + " sua média foi: " + media)
};





