
import persona from "../POO/persona.js";
class estudiante extends persona{
    constructor(cc,apellido,nombre,edad,genero,vlrMatricula,programa){
        super(cc,apellido,nombre,edad,genero);
        this.vlrMatricula=vlrMatricula;
        this.programa=programa;
    }
    imprimirDatosEstud(){
        console.log(" DATOS DEL ESTUDIANTE ")
        console.log("_____________________")
        console.log("_____________________")
        console.log(`programa-> ${this.programa}`)
        console.log(`valor -------> ${this.vlrMatricula}`)
    }

}
export default estudiante;