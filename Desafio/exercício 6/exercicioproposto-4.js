//Pedir para o usuário digitar dois números e mostrar uma massagem informando se foi aprovado ou não. A nota de corte é 5. Contudo, se qualquer uma das notas for zero, reprovado automaticamente.Usando OU <||>


var nota1 = prompt('Digite a primeira nota: ');
nota1 = parseInt(nota1);
var nota2 = prompt('Digite a segunda nota: ');
nota2 = parseInt(nota2);
var media = (nota1 + nota2) / 2;

if (nota1 === 0 || nota2 === 0 || media <= 5) {
    alert('Você esta REPROVADO' + " " + media);
} else {
    alert('Você foi APROVADO' + " " + media);
}