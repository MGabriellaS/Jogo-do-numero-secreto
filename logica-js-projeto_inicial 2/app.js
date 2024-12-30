alert('Boas Vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! preencha todos os campos!';
alert(mensagemDeErro);

let nomeUsuario = prompt('Qual seu nome?');
let idadeUsuario = prompt('Qual a sua idade?');

if (idadeUsuario >= 18) {
    alert('Pode tirar a habilitação!!');
}