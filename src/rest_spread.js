
function somar(){
    let soma = 0;

    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments)
    // return a + b;
}

console.log(somar(10,20,30,50))


console.log('-------------') 

// Rest

function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somar(10,20,30,80))

console.log('-------------') 

//Spread

const numeros =[1,2,3,4]
console.log(...numeros)

console.log('-------------') 

const timesDeFutebolDeSp = ['Corinthians', 'palmeiras', 'São Paulo', 'Santos'];
const timesDeFutebolDoRio =['Botafogo', 'Vasco', 'Flamengo', 'Fluminense'];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio); 
const timesDeFutebol= [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

// timesDeFutebolDeSp.concat(timesDeFutebolDoRio)
console.log(timesDeFutebol);

console.log('-------------' ) 

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna ={
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);
console.log(carroDaJulia);

// desestruturação

console.log('-------------' ) 

//const motorDoCarroDaAna = carroDaAna.motor;
const {motor: motorDoCarroDaAna } = carroDaAna;
const {motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

console.log('-------------' ) 

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outroTimes);