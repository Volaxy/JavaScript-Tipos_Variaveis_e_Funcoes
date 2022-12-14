Já aprendemos os tipos de variáveis que podemos utilizar, entre os quais temos os números, os textos e os booleanos. Porém, como podemos utilizar o valor de uma variável numérica em um texto, ou utilizar uma string que contenha apenas números para fazer contas?

Para estes casos, no JavaScript vamos utilizar `Number()` e `String()`, que vão nos permitir converter os dados para números ou textos.

## String()
Vamos fazer alguns exemplos de conversão de números e booleanos através de `String()`:

```javascript
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
```

Outra opção para transformarmos um valor em String é usar o `toString()`:

```javascript
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
```

```javascript
let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
```

## Number()
Vamos fazer alguns exemplos de conversão de textos e booleanos através de `Number()`:

```javascript
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação
```

Podemos usar o operador de soma `+` para fazer a conversão de textos para números, colocando-os antes das variáveis:

```javascript
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
```

```javascript
let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
```

```javascript
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
```

> Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.