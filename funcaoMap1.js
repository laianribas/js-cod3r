const nums = [1, 2, 3, 4, 5]
let result = nums.map((n) => n * 2)
console.log(result)

const soma10 = (e) => e + 10

const triple = (e) => e * 3

const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(soma10).map(triple).map(paraDinheiro)

console.log(result)