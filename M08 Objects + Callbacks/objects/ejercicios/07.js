// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre: "Miguel",
    apellido: "Soto",
    notamaterias: {
        ingles: 5,
        calculo: 3,
        poo: 4
    },
    universidad: "CUN",

    imprimirNotas: () =>{ return `notas de ${this.nombre}: Ingles: ${this.ingles}, Calculo: ${this.calculo}, POO: ${this.poo}`}

};

console.log(objetoAnidado)

module.exports = objetoAnidado;
