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
var n1 = prompt("Digite o primeiro número");//1° forma
n1 = parseFloat(n1);

var n2 = parseFloat(prompt("Digite o segungo número"));//2° forma

var media = (n1 + n2) / 2;

alert(media > 5)