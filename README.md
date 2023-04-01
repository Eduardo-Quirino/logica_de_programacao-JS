## **Lógica de Programação com Javascript** 

#### 🔗*https://youtube.com/playlist?list=PL1dUY2RYa2RidB3B134ywckDyf-FOwbv7*

## Problemas:

**2- Pergunta o nome do usuário e  mostrar mensagem de boas-vindas.**

```javascript
//Pedir o nome so usuário e imprimir na tela

var nome = prompt("Qual seu nome?");
alert("Bem vindo!" + " " + nome);


```

**3- Pedir para o usuário digitar dois números e mostrar a soma.**

```javascript
//Pedir para o usuário digitar dois números e mostrar a soma.

//Primeiro número
var n1 = prompt("Digite o primeiro número!");
n1 = parseFloat(n1);//convert

//Segundo número
var n2 = prompt("Digite o sugundo número");
n2 = parseFloat(n2);//convert

//impressão
alert(n1 + n2);
```

**4-Pedir para o usuário digitar dois números e mostrar a média.**

```javascript
//Pedir para o usuário digitar dois números e mostrar a média

var n1 = prompt("digite um número");
n1 = parseFloat(n1);

var n2 = prompt("digite outro um número");
n2 = parseFloat(n2);

var media = (n1 + n2) / 2;

alert("A média e: " + media);
```



**5-Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5**

```javascript
//Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5
var n1 = prompt("Digite o primeiro número");//1° forma
n1 = parseFloat(n1);

var n2 = parseFloat(prompt("Digite o segungo número"));//2° forma

var media = (n1 + n2) / 2;

alert(media > 5);
```

**6-Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não. A nota de corte é 5.**

```javascript
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
```

**7- Pedir para o usuário digitar dois números e mostrar uma massagem informando se foi aprovado ou não. A nota de corte é 5. Contudo, se qualquer uma das notas for zero, reprovado automaticamente.** 

```javascript
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
```

**8-Pedir para o usuário digitar um número de 1 a 3. Mostrar na tela**
**uma mensagem diferente para para cada número.**

```javascript
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
```

**9-Pedir para 0 usuário digitar um número e depois  a tabuada desse**
**número de 1 a 1000.**

```javascript
alert("Tabuada de Multiplicação");
let num = prompt("Digite o multiplicador: ");
num = parseFloat(num);

let indice = 1;

//repita até que indice seja <=1000
while (indice <= 1000) {
     document.write(num + ' x ' + indice + ' = ' + (num * indice) + '<br>');

     indice = indice + 1;

}
document.write('saiu do loop');
```

OBS : EVITAR USAR < document.write > NO DIA  A DIA

**10-**





---



## # 📘Desafios :

> 3 -
>
> //pedir para O usuario digitar um numero
> //converter em numero inteiro
> //pedir para O usuario digitar outro numero
> //converter em numero inteiro
> //mostrar a subtração concatenando com o texto "a subtração é: ..."
> //mostrar a multiplicação concatenando com O texto "a multiplicação é:
> ..."
> //mostrar a divisão concatenando com O texto "a divisão é: ..."
> //mostrar a soma concatenando com o texto "a soma é: ..."
>
> ```javascript
> //pedir para O usuario digitar um numero
> var n1 = prompt("Digite o primeiro número");
> 
> //converter em numero inteiro
> n1 = parseInt(n1);
> 
> //pedir para O usuario digitar outro numero
> var n2 = prompt("Digite o segundo número");
> 
> //converter em numero inteiro
> n2 = parseInt(n2);
> 
> //mostrar a subtração concatenando com o texto "a subtração é: ..."
> alert("a subtração é: " + (n1 - n2));
> //mostrar a multiplicação concatenando com O texto "a multiplicação é:..."
> alert("a multiplicação é: " + (n1 * n2));
> //mostrar a divisão concatenando com O texto "a divisão é: ..."
> alert("a divisão é: " + (n1 / n2));
> //mostrar a soma concatenando com o texto "a soma é: ..."
> alert("a soma é: " + (n1 + n2));
> 
> ```
>
> 

> 4 -
>
> ```javascript
> //pedir para O usuario digitar um numero
> var n1 = prompt("Digite o primeiro número");
> //converter em numero inteiro
> n1 = parseInt(n1);
> 
> 
> //pedir para o usuario digitar outro numero
> var n2 = prompt("Digite o segundo número");
> //converter em numero inteiro
> n2 = parseInt(n2);
> 
> //mostrar num alert o seguinte texto O resto da divisão de(n1) por(n2) é: (resultado);
> alert("O resto da divião de " + " " + n1 + " por" + " " + n2 + " é : " + (n1 % n2));
> //mostrar num alert o seguinte texto O numero (n1) elevado a (n2) é:(resultado);
> alert("O elevado de: " + n1 + " a " + n2 + " é : " + (n1 ** n2));
> 
> 
> ```
>
> **Exercício Proposto:  3**
>
> //fazer jogador 1 digitar um numero
>
> //fazer jogador 2 digitar outro numero
>
> //se forem iguais, mostrar mensagem 'EMPATE'
>
> //sortear um número entre o e 1
>
> //se o número sorteado for 0, ganha quem escolher o número MENOR
>
> //se o número sorteado for 1, ganha quem escolher o número MAIOR 
>
> ```javascript
> alert('Digite números entre 0 e 1')
> 
> //fazer jogador 1 digitar um numero
> var nJogador1 = prompt('número do jogador 1');
> nJogador1 = parseInt(nJogador1);
> //fazer jogador 2 digitar outro numero
> var nJogador2 = prompt('número do gogador 2');
> nJogador2 = parseInt(nJogador2);
> //se forem iguais, mostrar mensagem 'EMPATE'
> if (nJogador1 === nJogador2) {
> alert('Vocês empataram !');
> } else {
> //sortear um número entre o e 1
> var nSorteado = parseInt(Math.random() * 2);
> //se o número sorteado for 0, ganha quem escolher o número MENOR
> if (nSorteado === 0) {
> if (nJogador1 < nJogador2) {
>    alert('Ganhou jogador 1');
> } else {
>    alert('Ganhou jogador 2');
> }
> } else {
> if (nJogador1 > nJogador2) {
>    //se o número sorteado for 1, ganha quem escolher o número MAIOR 
>    if (nJogador1 > nJogador2) {
>        alert('Ganhou jogador 1');
>    } else {
>        alert('Ganhou jogador 2');
>    }
> }
> 
> }
> 
> }	
> ```
>
> > **Exercício Proposto - 5 exercício 3.1**
> >
> > ```javascript
> > /*
> > fazer jogador 1 digitar um numero
> > 
> > fazer jogador 2 digitar outro numero
> > 
> > se forem iguais, mostrar mensagem 'EMPATE'
> > 
> > sortear um número entre o e 1
> > 
> > se o número sorteado for 0, ganha quem escolher o número MENOR
> > 
> > se o número sorteado for 1, ganha quem escolher o número MAIOR 
> > */
> > 
> > 
> > 
> > alert('Digite números entre 0 e 1')
> > 
> > //fazer jogador 1 digitar um numero
> > var nJogador1 = prompt('número do jogador 1');
> > nJogador1 = parseInt(nJogador1);
> > //fazer jogador 2 digitar outro numero
> > var nJogador2 = prompt('número do gogador 2');
> > nJogador2 = parseInt(nJogador2);
> > 
> > //se forem iguais, mostrar mensagem 'EMPATE'
> > 
> > 
> > //sortear um número entre o e 1
> > var nSorteado = parseInt(Math.random() * 2);
> > alert("nSorteado: " + nSorteado);
> > 
> > //se o número sorteado for 0, ganha quem escolher o número MENOR
> > //se o número sorteado for 1, ganha quem escolher o número MAIOR 
> > if ((nSorteado === 0 && nJogador1 < nJogador2) || (nSorteado === 1 && nJogador1 > nJogador2)) {
> >     alert('Ganhou o jogador 1');
> > } else {
> >     alert('Ganhou jogador 2');
> > }
> > ```
> >
> > 
>
> 
>
> 
>
> **Exercício Proposto - 4**
>
> ```javascript
> //Pedir para o usuário digitar dois números e mostrar uma massagem informando se foi aprovado ou não. A nota de corte é 5. Contudo, se qualquer uma das notas for zero, reprovado automaticamente.Usando OU <||>
> 
> var nota1 = prompt('Digite a primeira nota: ');
> nota1 = parseInt(nota1);
> 
> var nota2 = prompt('Digite a segunda nota: ');
> nota2 = parseInt(nota2);
> 
> var media = (nota1 + nota2) / 2;
> 
> if (nota1 === 0 || nota2 === 0 || media <= 5) {
>  alert('Você esta REPROVADO' + " " + media);
> } else {
>  alert('Você foi APROVADO' + " " + media);
> }
> ```
>
> 
>
> **Exercício Proposto - 7**
>
> ```javascript
> //Pedir para 0 usuário digitar um número e depois  a tabuada desse número de 0 a 1000.
> 
> alert("Tabuada de Multiplicação");
> let num = prompt("Digite o multiplicador: ");
> num = parseFloat(num);
> 
> let indice = 0;
> 
> //repita até que indice seja <=1000
> while (indice <= 1000) {
>   document.write(num + " x " + indice + " = " + num * indice + "<br>");
> 
>   if (indice % 10 === 0 && indice > 0) {
>     document.write("<hr>");
>   }
>   indice = indice + 1;
> }
> document.write("saiu do loop");
> 
> ```
>
> 
>
> **Exercício Proposto - 7.1**
>
> ```javascript
> /*
> Para este exercício, mostre na tela todos os anos a partir de 1004 até o ano 2023, pulando de quatro em quatro anos.
> 
> Por exemplo:
> 
>     1004
> 
>     1008
> 
>     1012
> 
> E assim por diante.
> 
> É como mostrar os anos bissextos, mas sem as regras para descobrir se um ano é bissexto ou não. (vamos imaginar que se o ano é múltiplo de quatro, ele é bissexto).
> */
> 
> let ano = 1004;
> 
> while (ano <= 2023) {
>   if (!(ano % 100 === 0) || ano % 400 === 0) {
>     document.write(ano + "<br>");
>   } else {
>     document.write(ano + " não é bissexto <br>");
>   }
>   //ano = ano + 4
>   ano += 4;
> }
> ```









