//ES9 Object.values/Object.entries

const object = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(object)) //retorna o valor dos atributos do objeto em um array
console.log(Object.entries(object)) //retorna um array de array do tipo chave/valor do objeto

//Melhorias na notação literal

const nome = 'Carla'

const pessoa = {
    nome,
    ola() {
        return 'Olá'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class

class Animal {}

class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())