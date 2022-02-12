function Carro(velMax = 200, delta = 5) {
    //atributo private

    let velocidadeAtual = 0

    //metodo public
    this.aceletar = function() {
        if (velocidadeAtual + delta <= velMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velMax
        }
    }

    //metodo public
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.aceletar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.aceletar()
ferrari.aceletar()
ferrari.aceletar()
ferrari.aceletar()
console.log(ferrari.getVelocidadeAtual())