import './style.css'

// 1

const frutas = ['frutilla', 'manzana', 'pera', 'melón', 'sandía']
const frutasPop = frutas.pop()
console.log(frutasPop)
const frutasPush = frutas.push('mango')
console.log(frutas)

// 2

const tareas = ['Practicar js', 'Practicar HTML', 'Practicar CSS']
console.log(`Tarea completada: ${tareas[0]}`)
const tareaNueva = tareas.unshift('Practicar Python')
console.log(tareas)

// 3

const clientes = ['Roberto', 'Juan', 'José']
const clientesNuevos = clientes.push('María', 'Pedro')
const clientesAtender = clientes.shift()
console.log(clientes)

// 4

const numeros = [9, 7, 6, 8, 25]
for (let i = 0; i <= 3; i++) {
    const UltimoNumero = numeros.pop()
    const PrimerNumero = numeros.unshift(UltimoNumero)
    console.log(numeros)
}

// 5

const carrito = []

// const carritoItem1 = prompt('Dame un item para añadir al carrito')
// carrito.push(carritoItem1)
// const carritoItem2 = prompt('Dame otro item para añadir al carrito')
// carrito.push(carritoItem2)
// const carritoItem3 = prompt('Dame otro item para añadir al carrito')
// carrito.push(carritoItem3)
// const eliminarItem = prompt('Desea eliminar el último item?')

// if(eliminarItem == 'Si'){

//     const ultimoItem = carrito.pop()

// }

console.log(carrito)

// 6

const valores = [15, 22, 215, 1, 9, 7, 6]
const arrayDobles = valores.map((valor) =>{
  return valor *2
})
console.log(arrayDobles)

// 7

const nombres = ['Raul', 'Juan', 'José', 'Miguel', 'Roberto']
const nombresMayus = nombres.map((nombre) =>{
  return nombre.toUpperCase()

})
console.log(nombresMayus)

// 8

const preciosSinIVA = [234, 421, 623, 22, 19, 9, 28]
const preciosConIVA = preciosSinIVA.map((precio)=>{
  const IVA = precio * (21/100)
  const precioFinal = (precio + IVA).toFixed(2)
  return precioFinal
})
console.log(preciosConIVA)

// 9

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersCuadrado = numbers.map((numero)=>{
  return numero*numero
})
console.log(numbersCuadrado)

// 10

const numerosPares = [134, 12412, 543, 342, 22, 12, 9, 10, 11]
const pares = numerosPares.filter((numero)=>{
  if(numero %2 == 0){
    return true
  }else{
    return false
  }
})
console.log(pares)

// 11

const palabras = ['hipopotomostrosesquipedaliofobia', 'pneumonoultramicroscopicsilicovolcanoconiosis', 'hola',' sandwich', 'jamón', 'Sol']
const palabrasLargas = palabras.filter((palabra)=>{
  if(palabra.length >= 5){
    return true
  }else{
    return false
  }
})
console.log(palabrasLargas)

// 12

const productos = [
  {nombre: 'Celular', precio : 1500},
  {nombre: 'Tablet', precio : 300},
  {nombre: 'Heladera', precio : 200},
  {nombre: 'Videojuego', precio : 700},
  {nombre: 'Tabla de cocina', precio : 960},
  {nombre: 'Estufa', precio : 1635},
  {nombre: 'Alcancía', precio : 500},
  {nombre: 'Cuadro', precio : 15013340},
  {nombre: 'Poster', precio : 1500}
]
const productosOferta = productos.filter((producto)=>{
  if(producto.precio < 500){
    return true
  }else{
    return false
  }
})
console.log(productosOferta)

// 13

const estudiantes = [
  {nombre: 'Luis', nota : 8},
  {nombre: 'Raul', nota : 5},
  {nombre: 'José', nota : 3},
  {nombre: 'María', nota : 5},
  {nombre: 'Carla', nota : 1},
  {nombre: 'Sol', nota : 10},
  {nombre: 'Matías', nota : 7},
  {nombre: 'Bernardo', nota : 6.99},
  {nombre: 'Juan', nota : 6},
  {nombre: 'Daniel', nota : 8},
  {nombre: 'Tomás', nota : 10}
]
const estudiantesAprobados = estudiantes.filter((estudiante)=>{
  if(estudiante.nota >= 7){
    return true
  }else{
    return false
  }
});
console.log(estudiantesAprobados)

// 14

const tareasObjeto = [
  {descripción: 'Limpiar los platos', completada : true},
  {descripción: 'Practicar Js', completada : true},
  {descripción: 'Practicar Saxofón', completada : true},
  {descripción: 'Practicar CSS', completada : false},
  {descripción: 'Practicar HTML', completada : false},
  {descripción: 'Practicar Python', completada : 'Pendiente'},
  {descripción: 'Practicar C#', completada : true}
]
const tareasCompletadas = tareasObjeto.filter((tarea)=>{
  if(tarea.completada == true){
    return true
  }else{
    return false
  }
});
console.log(tareasCompletadas)

// 15

const nombresFoEach = ['Raul',' José','Juan', 'Tomás', 'Joseph', 'María']
const nombresLeer = nombresFoEach.forEach((nombre)=>{
  console.log(nombre)
});

// 16

const edades = [18, 34, 654, 23, 11, 64, 25, 9]
let EdadesSuma = 0;

const edadessumadas = edades.forEach((edad)=>{
    EdadesSuma += edad;
});

console.log(EdadesSuma);

// 17

const productosSinDescuento = [
  {nombre: 'celular', precio: 41345},
  {nombre: 'Tablet', precio: 451},
  {nombre: 'Cocina', precio: 413553},
  {nombre: 'Poster', precio: 3434195},
  {nombre: 'Auriculares', precio: 33398},
  {nombre: 'Libro', precio: 543598},
  {nombre: 'Espejo', precio: 443},
]
const productosDescuento = productosSinDescuento.forEach((producto)=>{
  const descuento = producto.precio * 0.1
  const descuentoAplicado = producto.precio - descuento
  console.log(descuentoAplicado)
})

// 18

const invitados = ['Matias',' José','Juan', 'Tomás', 'Joseph', 'María']
const invitaciones = invitados.forEach((invitado)=>{
  console.log(`Invitación enviada a ${invitado}`)
})