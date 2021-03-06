// Função em JS é First-Class Object (Citizens)

//High-order function

//criar função literal

function fun1() {}

// Armazenar em uma variável

const fun2 = function() {}

//Armazenar em um array

const array = [
    function(a, b) {
        return a + b
    },
    fun1,
    fun2
]

console.log(array[0](2, 5))

// Armazenar em um atributo de Objeto

const object = {
    falar: function() {
        return 'Olá'
    }
}

console.log(object.falar())

// Passar função como parametro

function run(fun) {
    fun()
}

run(function() {
    console.log('executando...')
})

//uma função pode retornar/conter uma função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

const aux = soma(2, 3)

aux(4)