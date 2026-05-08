// Data completa
setInterval(
    function timeall(){
        let timefull = new Date();
        document.getElementById('complete').innerHTML = timefull;
    }, 100
)
// Ano completo
setInterval(
    function year(){
        let data = new Date();
        let fullyear = data.getFullYear();
        document.getElementById('completeyear').innerHTML = fullyear;
    }, 100
);

// Mês
setInterval(
    function month(){
        let data = new Date();
        let monthget = data.getMonth();
        monthget++;
        document.getElementById('month').innerHTML = monthget;
    }, 100
);

// Dia do mês
setInterval(
    function day(){
        let data = new Date();
        let dayget = data.getDate();
        document.getElementById('day').innerHTML = dayget;
    }, 100
);

// Dia da semana
setInterval(
    function week(){
        let data = new Date();
        let weekget = data.getDay();
        let DayOfTheWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let week = DayOfTheWeek[data.getDay()];
        document.getElementById('week').innerHTML = week;
    }, 100
);

// Minutos
setInterval(
    function week(){
        let data = new Date();
        let minute = data.getMinutes();
        document.getElementById('minutes').innerHTML = minute;
    }, 100
);

// Segundos
setInterval(
    function week(){
        let data = new Date();
        let seconds = data.getSeconds();
        document.getElementById('seconds').innerHTML = seconds;
    }, 100
);
// Mili Segundos
setInterval(
    function week(){
        let data = new Date();
        let miliseconds = data.getMilliseconds();
        document.getElementById('miliseconds').innerHTML = miliseconds;
    }
);

// Pega data padrão brasileira - DIA/MES/ANO
var data = new Date();
let DataBR = data.toLocaleString('pt-BR', {timeStyle: 'short'});
console.log(DataBR);

// Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {return x<10 ? '0' + x : '' + x};

let dataPadraoBR = diaMes + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

// COMPARAR DATAS - MAIOR OU MENOR. Ex: vencimentos
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento) {
    console.log("Sua conta venceu FDP vou mandar os cara ir te buscar ai em casa desgraçado!")
} else {
    console.log("Ainda não venceu, tudo certo! Vou te chamar para o meu casamento padrinho!")
}

// Diferença de dias entre datas
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");