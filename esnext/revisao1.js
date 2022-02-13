//let e const

// let tem escopo de bloco
// var tem escopo global

{
    var a = 2
    let b = 3
    console.log(b) //imprime b
}

console.log(a) //imprimi a
    //console.log(b) //Não imprimi b

//template String

const produto = 'iPad'

console.log(`${produto} é caro!`)

// Destructuring

const [l, e, ...tras] = 'Laian'

console.log(l, e, tras)

// const [x, y] = [1, 2, 3]
// console.log(x, y)
const [x, _, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 25 }
console.log(nome, idade)