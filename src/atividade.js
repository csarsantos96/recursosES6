
const alunos = [
    { nome: 'Gustavo', nota: 10 },
    { nome: 'Julia', nota: 3 },
    { nome: 'Paula', nota: 5 },
    { nome: 'Wagner', nota: 8 }
];
function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunos);

console.log("Alunos aprovados:", alunosAprovados);
