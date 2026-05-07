function on(){
    // document.getElementById("temp").innerHTML = "Começou a contar";
    // // Ele só ativa se o tempo determinado passar e depois de executar para
    // tempo = setTimeout(function(){
    //     document.getElementById("temp").innerHTML = "Passou 5 segundos do timeout";
    // }, 5000);
    crono = setInterval(function(){
        var soma = document.getElementById('temp').innerHTML;
        if(soma < 100){
            var cronometro = document.getElementById('temp').innerHTML;
            soma = parseInt(cronometro) + 1;
            document.getElementById('temp').innerHTML = soma;
        } else{
            off()
        }

    }, 1000)
};

function off(){
    // clearTimeout(tempo);
    // document.getElementById("temp").innerHTML = "Rapaz pq você parou?";
    clearInterval(crono);
};

function reset(){
    document.getElementById('temp').innerHTML = 0;
};