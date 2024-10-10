function Saludar(){
  console.log('buenas noches😊😊😊');
  console.log('buenas noches😊😊😊');
  console.log('buenas noches😊😊😊');
  console.log('buenas noches😊😊😊');
}

function PorDefecto(nameStudent,shift,subject="javaScript",genero="masculino"){

PorDefecto("diego","noche")
PorDefecto("diana","mañana","moviles","femenino")
}
function sumar(){
  let num1 =5
  let num2 =10
  let suma = num1 + num2
  return suma
  
}

function EqualFunction (number1, number2){
  let equal = number1 + number2
  return equal
}

function operation (number1, number2, op){
switch(op){
  case "+": return number1 + number2;
  case "-": return number1 - number2;
  case "*": return number1 * number2;
  case "/": {
    if(number2 !==0){
      return number1 / number2;
    }
  }
    
}
/*let nombre ="diana"
//llamar las funciones 
SaludarName('sandra',4.5)
SaludarName('luis',5)
SaludarName(nombre,3.7)
nombre="diego"
SaludarName(nombre,1.5)
//Saludar()*/

///llamar funcion
/*console.log(`la suma es ${EqualFunction(10,20)}`);
console.log(`la suma es ${EqualFunction(87,99)}`);
console.log(`la suma es ${EqualFunction(69,4)}`);*/
