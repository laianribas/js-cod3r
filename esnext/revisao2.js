//Arrow function
const soma = (a, b) => a + b
console.log(soma(1, 3))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//O this em uma arrow function sempre aponta para o module.exports. O this só é mutável em uma function normal atravél de um bind por exemplo

//Parametro default
function log(text = 'Node') {
    console.log(text)
}

log() //imprime o default
log(undefined) //imprime o default
log(null) //atribue o null à impressão
log('Olá') // Imprime substitui o parametro default pelo parametro passado na chamada da função

//Operador rest

function total(...numeros) {
    //O operador rest agrupa os valores passados por parâmetro em um array. Este operador possue a mesma sintaxe que o spread. Porém o spread é usado em arrays e objetos.
    let total = 0
    numeros.forEach((n) => (total += n))
    return total
}

console.log(total(2, 3, 4, 5, 6))