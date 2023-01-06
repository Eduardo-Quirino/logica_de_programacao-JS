/*
Operadores de comparação
== Igualdade (valor)
!= Diferente (valor)
=== Igualdade (valor e tipo)
!== Diferente (valor e tipo)
> Maior
>= Maior ou Igual
< Menor
<= Menor ou Igual
*/

//Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5

alert('Calculo de média maior que 5');

let n1 = prompt('Digite o número da primeira nota:');
n1 = parseFloat(n1);

let n2 = prompt('Digite o número da segunda nota:');
n2 = parseFloat(n2);

let media = (n1 + n2) / 2;

alert(media > 5);

