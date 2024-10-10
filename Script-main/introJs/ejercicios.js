let peso,altura,imc
let nombre

nombre=prompt("Ingrese su nombre: ")
peso=parseInt(prompt("Ingrese su peso: "))
altura=parseFloat(prompt("Ingrese su altura: "))
imc=peso/(altura*2)

if(imc<16)
  console.log("criterio de ingreso al hospital")
else if(imc>=16 && imc<=17)
  console.log("infrapeso")
else if(imc>17 && imc<18)
console.log("bajo peso")
else if(imc>18 && imc<25)
    console.log("peso normal")
else if(imc>25 && imc<30)
    console.log("sobre peso grado l")
else if(imc>30 && imc<35)
    console.log("sobre peso grado ll")
else if(imc>35 && imc<40)
    console.log("sobre peso grado lll")
else if(imc>40)
    console.log("obesidad morbida👀")

console.log("su imc es:  " + imc)