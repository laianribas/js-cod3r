const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.3, bolsista: false },
    { nome: 'Pedro', nota: 8.6, bolsista: false },
    { nome: 'Ana', nota: 9.1, bolsista: false }
]

const todosBolsista = alunos
    .map((aluno) => aluno.bolsista)
    .reduce((acc, bolsista) => acc && bolsista)
console.log(todosBolsista)

const algumBolsista = alunos
    .map((aluno) => aluno.bolsista)
    .reduce((acc, bolsista) => acc || bolsista)

console.log(algumBolsista)