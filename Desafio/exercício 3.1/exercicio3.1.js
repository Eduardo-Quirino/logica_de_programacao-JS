/*
fazer jogador 1 digitar um numero

fazer jogador 2 digitar outro numero

se forem iguais, mostrar mensagem 'EMPATE'

sortear um número entre o e 1

se o número sorteado for 0, ganha quem escolher o número MENOR

se o número sorteado for 1, ganha quem escolher o número MAIOR 
*/



alert('Digite números entre 0 e 1')

//fazer jogador 1 digitar um numero
var nJogador1 = prompt('número do jogador 1');
nJogador1 = parseInt(nJogador1);
//fazer jogador 2 digitar outro numero
var nJogador2 = prompt('número do gogador 2');
nJogador2 = parseInt(nJogador2);

//se forem iguais, mostrar mensagem 'EMPATE'


//sortear um número entre o e 1
var nSorteado = parseInt(Math.random() * 2);
alert("nSorteado: " + nSorteado);

//se o número sorteado for 0, ganha quem escolher o número MENOR
//se o número sorteado for 1, ganha quem escolher o número MAIOR 
if ((nSorteado === 0 && nJogador1 < nJogador2) || (nSorteado === 1 && nJogador1 > nJogador2)) {
    alert('Ganhou o jogador 1');
} else {
    alert('Ganhou jogador 2');
}




