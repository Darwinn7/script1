/* Declarar variables*/

let product 
let price, quantity, subtotal, neto, discountValue, feeValue
const discount = 0.07
const fee = 0.19

console.log('├──────────────────────────────┤')
//Datos de entrada/

console.log('┌──────────────────────────────┐')
console.log('│     FACTURA DE VENTA         │')
console.log('└──────────────────────────────┘')

product = prompt('Producto')
price = parseInt(prompt('Precio'))
quantity = parseInt(prompt('Cantidad'))

//DAtOS DE CALCULOS O PROCESO/
subtotal = price * quantity
discountValue = subtotal * discount
feeValue = (subtotal - discountValue) * fee
neto = subtotal - discountValue + feeValue

//DaTOS DE SALIDA
console.log('┌──────────────────────────────┐')
console.log('│     FACTURA DE VENTA         │')
console.log('└──────────────────────────────┘')
console.log(`\tProducto-->  ${product}`)
console.log(`\tPrecio---->  ${price}`)
console.log(`\tCantidad-->  ${quantity}`)
console.log('├──────────────────────────────┤')
console.log(`\tsubtotal------->  ${subtotal}`)
console.log(`\tVlr Descuento-->  ${discountValue.toFixed(0)}`)
console.log(`\tVlr del Iva---->  ${feeValue.toFixed(0)}`)
console.log(`\tneto Pagar----->  ${neto.toFixed(0)}`)
console.log('├──────────────────────────────┤')