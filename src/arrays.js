
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];



const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Front-End',
        nota :[10,3,5,8]
    }
    return itemAtual;
})