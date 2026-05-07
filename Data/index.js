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
        let minute = data.getSeconds();
        document.getElementById('seconds').innerHTML = minute;
    }, 100
);

