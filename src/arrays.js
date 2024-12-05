const redesSociais= ["Facebook", "Instagram", "X"];

for (let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}
console.log('--------------')
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    
    console.log(` #${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
});

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];



const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Front-End'
    }
    return itemAtual;
})

console.log('-------------')
console.log(alunos2 );


console.log('-------------')


const numeros = [1,2,3,4,5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})

console.log(dobroDosNumeros)


console.log('-------------')

const paula = alunos2.find(function(item){
    return item.nome =="Paula" // true or false
})

console.log(paula);

console.log('-------------')


const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome =="Paula" // true or false
})

console.log(indiceDaPaula);

console.log('-------------') 

// every

alunos2.push({
    nome:'Lucio',
    curso: 'Backend'
})

const todosOsAlunosSaoDeFrontEnd = alunos2.every(function(item){
    return item.curso === 'Front-End';
})

console.log(todosOsAlunosSaoDeFrontEnd);

console.log('-------------') 

const existeAlgumAlunoDeBackEnd = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Front-End'
})

console.log(existeAlgumAlunoDeBackEnd);

console.log('-------------') 

const alunosDeBackend = alunos2.filter(function(item){
    return item.curso ==='Backend';
})

console.log(alunosDeBackend)

console.log('-------------') 

function filtrarAlunosDeBackend(aluno){
    return aluno.curso === 'Backend';
}

const alunosDeBackend2 = alunos2.filter(filtrarAlunosDeBackend)

console.log(alunosDeBackend)

// reduce

console.log('-------------') 

const nums = [10,20,30]

const soma = nums.reduce(function(total, itemAtual){
    total += itemAtual;
    return total;
})

console.log(soma)

console.log('-------------')  

let somaComFor = 0;

for(let i = 0; i < nums.length; i++){
    somaComFor += nums[i];
}

console.log(somaComFor); 

console.log('-------------') 

// reduce

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador
} ,'')

console.log(nomesDosAlunos);
