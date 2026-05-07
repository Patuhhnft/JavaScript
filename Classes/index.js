class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.carro = valor2;
        this.ano = valor3;
    };
    buzina() {
        return this.carro + " buzinou: biiiiiiiiiii";
    };
};

const uno = new Carro("Fiat", "Uno", "2001");
const gol = new Carro("WolksWagen", "Gol", "2010");

console.log(uno);
console.log(gol.buzina());
gol.ano = 2014;
console.log(gol);