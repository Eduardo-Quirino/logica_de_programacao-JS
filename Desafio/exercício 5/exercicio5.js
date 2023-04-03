alert('Digites números entre 0 e 1')

//fazer jogador 1 digitar um numero
var nJogador1 = prompt('número do jogador 1');
nJogador1 = parseInt(nJogador1);
//fazer jogador 2 digitar outro numero
var nJogador2 = prompt('número do gogador 2');
nJogador2 = parseInt(nJogador2);
//se forem iguais, mostrar mensagem 'EMPATE'
if (nJogador1 === nJogador2) {
    alert('Vocês empataram !');
} else {
    //sortear um número entre o e 1
    var nSorteado = parseInt(Math.random() * 2);
    //se o número sorteado for 0, ganha quem escolher o número MENOR
    if (nSorteado === 0) {
        if (nJogador1 < nJogador2) {
            alert('Ganhou jogador 1');
        } else {
            alert('Ganhou jogador 2');
        }
    } else {
        if (nJogador1 > nJogador2) {
            //se o número sorteado for 1, ganha quem escolher o número MAIOR 
            if (nJogador1 > nJogador2) {
                alert('Ganhou jogador 1');
            } else {
                alert('Ganhou jogador 2');
            }
        }

    }

}


