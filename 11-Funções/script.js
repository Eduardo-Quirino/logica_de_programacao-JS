/*
Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 a 1000. Deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente.
*/
let output = document.querySelector("#output");
let mensagem = "";
//criar tabuada
function mostrarTabuada() {
  //perguntar o número para usuário e converter o número
  let n = parseFloat(prompt("Digite o número"));
    limparTabuada();
    
  //criar variavel para indice
    let i = 1;
    
  //enqunto indice <= 100
  while (i <= 1000) {
    //concatena com mensagem
    mensagem += n + " x " + i + " = " + n * i + "<br>";
    i++;
  }
  //mostra mensagem no output
  output.innerHTML = mensagem;
}

// limpar tabuada
function limparTabuada() {
  mensagem = "";
  output.innerHTML = mensagem;
}
