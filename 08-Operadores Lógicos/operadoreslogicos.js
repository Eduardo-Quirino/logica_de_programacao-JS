/*
Pedir para o usuário digitar dois números e mostrar uma massagem informando se foi aprovado ou não. A nota de corte é 5. Contudo, se qualquer uma das notas for zero, reprovado automaticamente.

Operadores Lógicos
! Nao (not) 
&& E (and) 
|| Ou (or) 
*/

//Pedir para o usuário digitar dois números
alert('Informativo de aprovação');
var nota1 = prompt('Digite a primeira nota: ');
nota1 = parseInt(nota1);

var nota2 = prompt('Digite a segunda nota: ');
nota2 = parseInt(nota2);

var media = (nota1 + nota2) / 2;

//mostrar uma massagem informando se foi aprovado ou não.A nota de corte é 5
if (media >= 5 && nota1 > 0 && nota2 > 0) {
    alert('Parabens APROVADO' + " " + media);
} else {
    // Contudo, se qualquer uma das notas for zero, reprovado automaticamente.
    alert('Você esta REPROVADO!' + " " + media);
}