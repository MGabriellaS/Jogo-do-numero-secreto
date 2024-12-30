alert('Boas vindas');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log('boas vindas')
let nome= gabriella;
let tentativas = 1;
let linguagem;
console.log(`bem vindo(a) ${nome}`)

linguagem = prompt('Qual linguagem de programação você mais gosta?');
console.log(linguagem)

let valor1 = 15;
let valor2 = 7;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

let valor3 = 25;
let valor4 = 8;
let resultado1 = valor3 - valor4;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

let numeroInteiroAleatorio2 = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);