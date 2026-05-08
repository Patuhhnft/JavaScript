/*

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2000,
    motor: ["1.6", "1.4", "1.0"]
}

// Conversor de objeto para texto
let texto = JSON.stringify(carro);

// Coloca o texto no HTML
document.getElementById('area').innerHTML = texto;

// Conversor de Texto para Objeto
let obj = JSON.parse(texto);

// Pegamos um valor de algum objeto
console.log(obj.motor[2]);

*/

function buscarcep(){
    let input = document.getElementById('cepl').value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input +'/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById('text').innerHTML = this.responseText;
        // Transformei o texto em objeto
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;
        document.getElementById('text').innerHTML = "logradouro: "+ logradouro + ", cidade: " + cidade + ", Estado: " + estado;
}
}

// ajax.onload = function(){
//     document.getElementById('area').innerHTML = this.responseText;
//     let obj = JSON.parse(this.responseText);
//     alert(obj.siafi);
// }