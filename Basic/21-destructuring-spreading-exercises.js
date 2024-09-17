/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, 3, 4]
let[myValue0, myValue1] = myArray
console.log(myValue0)
console.log(myValue1)


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue2, myValue3, myValue4, myValue5, myValue6 = 0] = myArray
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    nombre: "Maria",
    age:33,
    email:"emedevelopa@gmail.com"
}

let {email, age} = person
console.log(email)
console.log(age)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let{email:correo, age:edad} = person
console.log(correo)
console.log(edad)


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person1 = {
    nombre:"Juanito",
    edad: 22,
    colores: {
        primero:"azul",
        segundo:"amarillo",
        tercero:"gris"
    }
}
let {colores: {primero: favorito, segundo: secundario}} = person1
console.log(favorito)
console.log(secundario)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let unArray = ["Paris", "Madrid", "Amsterdam"]
let otroArray = ["Playa", "Montaña", "Ciudad"]
let misArrays = [...unArray, ...otroArray]
console.log(misArrays) 

// 7. Usa propagación para crear una copia de un array
let array1 = [2, 3, 5, 66]
let array2 = [...array1]
console.log(array2)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let myPerson = {...person, ...person1}
console.log(myPerson)

// 9. Usa propagación para crear una copia de un objeto
let copiaPersona = {...person}
console.log(copiaPersona)

// 10. Combina desestructuración y propagación
let persona = {
    nombre:"Pepe",
    años:45,
    direccion:"Mallorca",
    alias:"Pepito666"
}

let{nombre, años, ...restoUsuario} = persona
console.log(nombre)
console.log(años)
console.log(restoUsuario)

let nuevoUsuario = {
    ...restoUsuario,
    nombre: "Juan",
    años: 48
}

console.log(nuevoUsuario)