/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
    name: "Maria",
    age : 33,
    mail: "emedevelopa@gmail.com"
}

// 2. Accede y muestra su valor
console.log(persona.name)
console.log(persona.age)

// 3. Agrega una nueva propiedad
persona.food = "Huevos con patatas"
console.log(persona)

// 4. Elimina una de las 3 primeras propiedades
delete persona.age
console.log(persona)

// 5. Agrega una función e invócala
persona.suma = function (a ,b) {
    return a + b
}
console.log(`María sabe sumar 1 + 2 y le da ${persona.suma (1, 2)}`)

// 6. Itera las propiedades del objeto
for (let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`)
}

// 7. Crea un objeto anidado
let persona1 = {
    color:"blue",
    shape:"circle",
    datos: {
        name: "Maria",
        mail: "emedevelopa@gmail.com"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona1)


// 9. Comprueba si los dos objetos creados son iguales
console.log(persona === persona1) 
console.log(persona.name == persona1.datos.name)


// 10. Comprueba si dos propiedades diferentes son iguales