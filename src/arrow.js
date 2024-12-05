const minhaFuncao = () => "Diz olá";


console.log(minhaFuncao())


console.log('-------------') 

const retornaUmCarro = () =>({
    modelo: 'Ka',
    marca: 'Ford'
})

console.log(retornaUmCarro());

console.log('-------------') 


const carro ={
    velocidadeAtual: 40,
    acelerar: function(){
        this.velocidadeAtual += 10;
    },
    frear:() =>{
        this.velocidadeAtual -=10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);