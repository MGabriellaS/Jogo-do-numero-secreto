
function exibirMsg() {
    console.log('olar mundão');
}

exibirMsg();

function olaPessoa(nome){
    console.log(`olá, ${nome}!`)
}
olaPessoa("Gabriella");

function dobrarNumero(numero){
    return numero * 2;
}
let resultado = dobrarNumero(8);
console.log(resultado);

function daleMedia (n1, n2, n3){
    return (n1+n2+n3)/3;
}
let media = daleMedia(8, 10, 7);
console.log(media);

function acheOMaior (n1, n2){
    return n1> n2? n1:n2;
}
let maiorNumero = acheOMaior(15,19);
console.log(maiorNumero);

function quadrado(numero){
    return numero * numero;
}
let oQuadrado = quadrado(25);
console.log(oQuadrado);