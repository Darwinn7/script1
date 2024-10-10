function factura(producto,cantidad,precio){
    producto=papas
    cantidad=2
    precio=10
   
    let producto=[nombre,precio,cantidad]
    return producto

    
}
function Subtotal(factura){
    return factura[1]* factura[2]
}
function descuento(subtotal,descuento){
    return subtotal * descuento
}
let arrayFactura = factura()
let Subtotal = Subtotal(arrayFactura)
let vlrDescuento = descuento(subtotal,0.15)
let neto = subtotal - vlrDescuento


