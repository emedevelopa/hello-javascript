/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
let myArray = ["perro", "gato", "zebra", "jirafa", "saltamontes"]

// 2. Añade dos más. Uno al principio y otro al final
myArray.push("colibrí") //Añade al final
myArray.unshift("delfín") //Añade al principio
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(
    ["El hobbit", "El señor de los anillos", "Harry Potter", "Diseño desde Marte", "El bebé es un mamífero"]
)
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Pipi Calzaslargas")
mySet.add("El hobbit")
console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("El hobbit")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["Junio", "Julio", "Agosto"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let fruits = ["pera", "manzana", "melón", "sandía"]
let secondSet = new Set (fruits)
console.log(secondSet)

let secondMap = new Map([[secondSet]]);
console.log(secondMap)
