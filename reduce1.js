const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.3, bolsista: false },
    { nome: 'Pedro', nota: 8.6, bolsista: false },
    { nome: 'Ana', nota: 9.1, bolsista: true }
]

const result = alunos
    .map((a) => a.nota)
    .reduce((acumulador, atual) => {
        console.log(acumulador, atual)
        return acumulador + atual
    }, 0)

console.log(result)