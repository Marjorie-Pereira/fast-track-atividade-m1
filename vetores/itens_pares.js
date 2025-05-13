
// ler 7 valores e mostrar quantos sao pares
const vetor = []
const pares = []
let numPares = 0

const prompt = require('prompt-sync')({sigint: true});

for(let i = 0; i < 7; i++) {
    const num = prompt("Digite um numero: ")
    vetor.push(Number(num))
    
    if(vetor[i] % 2 == 0) {
        numPares++
        pares.push({
            posicao: i,
            valor: vetor[i]
        })
    }
}

console.log(`\nNo vetor, existem ${numPares} números pares, são eles: `);
pares.forEach((num) => {
    console.log(`O número ${num.valor} na posição ${num.posicao + 1}`);
})
