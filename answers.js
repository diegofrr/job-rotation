// QUESTÃO 1
let i = 13;
let sum = 0;
let k = 0;

while(k < i) {
    k+=1;
    sum+=k;
}
console.log(sum)


// QUESTÃO 2
function fibNum(input) {
    let n = 0;
    let fib = [0, 1]
    while(n < input) {
        n = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(n)
        if(n == input) return `${input} pertence a sequência de Fibonacci`;
    } 
    return `${input} NÃO pertence a sequência de Fibonacci`;
}
console.log(fibNum(33));


// QUESTÃO 3
// a) 1, 3, 5, 7, (9)
// b) 2, 4, 8, 16, 32, 64, (128)
// c) 0, 1, 4, 9, 16, 25, 36, (49)
// d) 4, 16, 36, 64, (100)
// e) 1, 1, 2, 3, 5, 8, (13)
// f) 2,10, 12, 16, 17, 18, 19, (200)

// QUESTÃO 4 
// R: Quando os dois automóveis se cruzarem na rodovia, ambos estarão na mesma distância de Ribeirão Preto (?)

// QUESTÃO 5
function stringReverse(input) {
    let output = new Array(input.length);
    for(i in input) {
        output[(output.length - 1) - i] = input[i];
    }
    return output.join('');
}
console.log(stringReverse('parametro'))
