//Pedir para o usuário digitar um número de 1 a 3. Mostrar na tela uma mensagem diferente para para cada número.

let n = prompt("digite um número");
n = parseInt(n);

switch (n) {
    case 1:
        alert("Boa escolha");
        break;

    case 2:
        alert("Legal");
        break;

    case 3:
        alert("Caramba");
        break;

    default:
        alert("Escolha entre 1 a 6");
        alert("Fim do programa");
        break;
}