let numero,respuesta
let contPos=0, contNeg=0,acumPos=0,acumNeg=0

numero = parseInt(prompt(`ingresa un numero`))
numero =1

while(numero !==0){
  if(numero > 0){
    contPos++
    acumPos+= numero
  }else{
    contNeg +=1
    acumNeg += numero

  }
  console.log(numero)
  numero = parseInt(prompt(`ingresa un numero`))
}
document.writeln(`<hr>`)
document.writeln(`<cantidad de positivos--->${contPos}<hr>`)
document.writeln(`<suma de positivo--->${acumPos}<hr>`)
document.writeln(`<hr>`)
document.writeln(`<cantidad de negativos---> ${contNeg}<hr>`)
document.writeln(`<suma de negativos---> ${acumNeg}<hr>`)
document.writeln(`<hr>`)