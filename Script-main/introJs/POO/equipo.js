class Equipo{
    constructor(IdEquipo,nombre,descripcion,precio){
        this.IdEquipo = IdEquipo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    imprimirDatos(){
        console.log(" DATOS DEL EQUIPO ")
        console.log("_____________________")
        console.log("_____________________")
        console.log(`IdEquipo -> ${this.IdEquipo}`)
        console.log(`nombre -------> ${this.nombre}`)
        console.log(`descripcion ---------> ${this.descripcion}`)
        console.log(`precio -----------> ${this.precio}`)
        console.log(`\n---------------`)
        
    }
}
export default Equipo;