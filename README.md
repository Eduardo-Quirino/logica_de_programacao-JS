## **Lógica de Programação com Javascript** 

#### 🔗*https://youtube.com/playlist?list=PL1dUY2RYa2RidB3B134ywckDyf-FOwbv7*

## Problemas:

2- Pergunta o nome do usuário e  mostrar mensagem de boas-vindas.

```javascript
//Pedir o nome so usuário e imprimir na tela

var nome = prompt("Qual seu nome?");
alert("Bem vindo!" + " " + nome);


```

3- Pedir para o usuário digitar dois números e mostrar a soma.

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

4-Pedir para o usuário digitar dois números e mostrar a média.

```javascript
//Pedir para o usuário digitar dois números e mostrar a média

var n1 = prompt("digite um número");
n1 = parseFloat(n1);

var n2 = prompt("digite outro um número");
n2 = parseFloat(n2);

var media = (n1 + n2) / 2;

alert("A média e: " + media);
```



5-Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5

```javascript
//Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5
var n1 = prompt("Digite o primeiro número");//1° forma
n1 = parseFloat(n1);

var n2 = parseFloat(prompt("Digite o segungo número"));//2° forma

var media = (n1 + n2) / 2;

alert(media > 5);
```



## Desafios :

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
> //pedir para O usuario digitar um numero
> //converter em numero inteiro
> //pedir para o usuario digitar outro numero
> //converter em numero inteiro
> I *
> mostrar num alert o seguinte texto
> O resto da divisão de (n1) por (n2) é: (resultado);
> */
> /*
> mostrar num alert o seguinte texto
> O numero (n1) elevado a (n2) é: (resultado);
> */
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
> 

