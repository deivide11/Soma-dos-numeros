var inteiro = parseInt(prompt("Digite um número inteiro"));
var somaPar = 0;
var somaImpar = 0;

for(var i = 0; i <= inteiro; i++){
    if( i % 2 == 0){
        somaPar = somaPar + i;
    }else {
        somaImpar += i;
    }
}

console.log("Soma dos Pares: ", somaPar);
console.log("Soma dos Impares: ", somaImpar);