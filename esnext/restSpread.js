// operador ... rest(juntar)/spread(espalhar)
//usar rest como parametro de funçao

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12321.21 }
const clone = { ativo: true, ...funcionario } //nesse caso o operador spread pega os atributos de funcionario e clona no novo objeto
console.log(clone)

//usar spread com array

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoB)