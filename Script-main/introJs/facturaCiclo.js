//declara variables//
let product
let price, quantity,subtotal,neto,discountValues,feeValues,answer
const disCount1 =0.25
const disCount2= 0.05

/*iniciar contadores y acomladores*/
 let contDiscoun1=0, contcount2=0
 let acumSubtotal=0, acumDiscount=0, acumNeto=0
 

//DATOS DE ENTRADA//
answer= parseint(prompt("1.Si\nDesea ingresar factura"))
while(answer === 1){


    document.writeln('┌──────────────────────────────┐')
    document.writeln('│   FACTURA DE VENTA           │')
    document.writeln('└──────────────────────────────┘')

    product=prompt('producto')
    price=parseInt(prompt('precio'))
    quantity=parseInt(prompt('cantidad'))

    subtotal =price* quantity
    if(quantity >10){
        discountValues=subtotal * disCount1
        contDiscoun1++
    }else{
        discountValues = subtotal * disCount2
        contcount2++
    }
    acumSubtotal += subtotal
    acumDiscount += discountValues
    neto= subtotal - discountValues
    acumNeto += neto

    answer= parseint(prompt("1.Si\nDesea ingresar factura"))

}
//DATOS DE SALIDA//
document.writeln('┌──────────────────────────────┐')
document.writeln('│   detalles de la factura     │')
document.writeln('└──────────────────────────────┘')
document.writeln(`\tproducto-->${product}`)
document.writeln(`\tprecio-->${price}`)
document.writeln(`\tcantidad-->${quantity}`)
document.writeln('│──────────────────────────────│')
document.writeln(`\tsubtotal-->${subtotal}`)
document.writeln(`\tVlr descuento-->${discountValues}`)
document.writeln(`\tVlr del Iva-->${feeValues}`)
document.writeln(`\tneto pagar-->${neto}`)
document.writeln('└──────────────────────────────┘')
answer= parseint(prompt("1.Si\nDesea ingresar factura"))


document.writeln(`<p>Cantidad de descuentos 20% ${contDisconunt1}</p>`)
document.writeln(`<p>Cantidad de descuentos 05% ${contDisconunt2}</p>`)
document.writeln(`<p>Suma del subtotal -------> ${acumSubtotal}</p>`)
document.writeln(`<p>Suma del descuento ------> ${acumDiscount}</p>`)
document.writeln(`<p>Cantidad de descuentos 20% ${acumDiscount}</p>`)
document.writeln(`<p>Cantidad de descuentos 20% ${acumNeto}</p>`)
