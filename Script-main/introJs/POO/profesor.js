import persona from "../POO/persona.js";

class profesor extends  persona {
   
    constructor(cc,apellido,nombre,edad,genero,contrato, salario,numHoras,) {
        super(cc,apellido,nombre,edad,genero),
        this.contrato = contrato,
        this.salario = salario,
        this.numHoras = numHoras
}
imprimirDatosProf(){
    console.log(" DATOS DEL PROFESOR ")
    console.log("_____________________")
    console.log("_____________________")
    console.log(`contrato--------> ${this.contrato}`)
    console.log(`salario --------> ${this.salario}`)
    console.log(`numero de horas-> ${this.numHoras}`)
}
}
export default  profesor;

