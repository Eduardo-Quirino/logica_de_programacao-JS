//Pedir o nome so usuário e imprimir na tela
//Pedir para o usuário digitar dois números e mostrar a multiplicação.

//Pedir nome so usuário
var nome = prompt('Qual seu nome?');

//Diditar primeiro número
var n1 = prompt('Digite primeiro multiplicador');
n1 = parseFloat(n1)

//Digitar segundo número
var n2 = prompt('Digite o multicado');
n2 = parseFloat(n2);

alert("Olá " + nome + " " + "o resultado é " + n1 * n2);