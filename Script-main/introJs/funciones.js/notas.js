function nota(nota1, nota2, nota3){
  return(nota1 + nota2 + nota3)/3
}
function observacion(nota){
let mensaje
if(nota >=3){
  mensaje ="felicidades gano";
  
  
}else{
  mensaje ="lo siento perdio";
}
  return mensaje
}
let nombre ="paco"
let nota1 = nota(5,4,3)
let observacion1 = observacion(nota)

console.log(`informe del estudiante`);
console.log(`nombre: ${nombre}\n nota: ${nota1}\n observacion: ${observacion1}`);

