



 let nombres=[`hugo`,`luis`,`deicy`,`paco`]

//imprimir el contenido del array
console.log(nombres)


///imprimir el contenido de una posicion especifica
console.log(nombres[1])
console.log(` el tamaño del array es de ->${nombres.length}`)

//imprimir el ultimo  elemento del array
console.log(nombres[nombres.length-1])

///imprimir el primer  elemento del array
console.log(`el primer nombre de la lista es ->${nombres[0]}`)

nombres.push(`sandra`)
console.log(`el nombre en la ultima posicion de la lista ->${nombres[nombres.length-1]}`)


nombres.push(`sandra`,`darwin`)
console.log(nombres)
console.log(`el nombre en la ultima posicion de la lista ->${nombres[nombres.length-1]}`)
///unishift agrega elementos al inicio del array
nombres.unshift(`carlos`,`luis`,`anderson`)



///buscar elementos  en el array,devuelve el primero si esta repetido
console.log(nombres.indexOf(`luis`))

//buscar un elemento en el array, que diga si el elemento existe  o no
console.log(nombres.includes(`luis`))

///eliminar el ultimo elemento del array
nombres.pop()
console.log(nombres)

///elimar el primer elemento del array
nombres.shift()
console.log(nombres)

///eliminar un elemento o varios
nombres.slice(2,2)
console.log(nombres)

///ordenar en forma decendente
vectorordenado =nombres.reverse()//z - a
console.log(vectorordenado)


///ordenar en forma ascendente
vectorordenado = nombres.sort()///A - Z
console.log(vectorordenado)
