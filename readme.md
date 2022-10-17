# JavaScript: Tipos, Variáveis e Funções

Curso da Alura sobre os fundamentos do JavaScript, e sobre o NodeJS.

URL do curso -> [JavaScript: Tipos, Variáveis e Funções](https://cursos.alura.com.br/course/fundamentos-javascript-tipos-variaveis-funcoes)

![JavaScript: Tipos, Variáveis e Funções](https://www.alura.com.br/assets/api/share/curso-fundamentos-javascript-tipos-variaveis-funcoes.png)

## Links Úteis &#x1F517;
*

## Siglas &#x1F5FA;
*

## Atalhos &#x2328;
*

***

## 01 - Tipos Primitivos &#x1F516;
* Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números texto e booleanos.
* Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.
* Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela.
* Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false).
* Onde as booleanas mais aparecem, como resultados de comparações com `===` ou outros operadores de comparação como `>=`.

***

## 02 - Declarando Variáveis &#x1F516;
* `var` tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
* `let` e `const` têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e `const` não pode ter seu valor alterado depois de definido.
* O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
* null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
* null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
* O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
* Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e `String()` converte as variáveis para texto.