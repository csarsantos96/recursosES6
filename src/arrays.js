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


