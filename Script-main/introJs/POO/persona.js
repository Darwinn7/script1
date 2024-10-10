class persona{
    //el constructor va a tener los parametros
    //para crear el objeto
    //no confundir con propiedades del objeto
    constructor(cc,apellido,nombre,edad,genero){
        this.identificacion=cc;
        this.apellido=apellido;
        this.nombre=nombre;
        this.edad=edad;
        this.genero=genero;
        


    }
    ///crear los metodos
    imprimirDatos(){
        console.log(" DATOS DE LA PERSONA ")
        console.log("_____________________")
        console.log("_____________________")
        console.log(`identificacion -> ${this.identificacion}`)
        console.log(`apellido -------> ${this.apellido}`)
        console.log(`nombre ---------> ${this.nombre}`)
        console.log(`edad -----------> ${this.edad}`)
        console.log(`genero ---------> ${this.genero}`)
        console.log(`\n---------------`)
        console.log(``)
    }


}

export default persona;




