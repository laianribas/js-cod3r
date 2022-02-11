const soma = function(x, y) {
    return x + y
}

const result = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

result(3, 4)
result(3, 4, soma)
result(3, 4, function(a, b) {
    return a - b
})
result(3, 4, (a, b) => a * b)

const pessoa = {
    falar: function() {
        return 'Olá'
    }
}

console.log(pessoa.falar())