/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

let i = 1
while (i <= 20) {
    console.log(i)
    i++
}

i = 1
do {
    console.log(i)
    i++
} while(i <= 20) 


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let resultado = 0
for(let i = 0; i <= 100; i++) {
    resultado += i;
}
console.log(resultado)

let a = 0
let suma = 0
while (a <= 100) {
    suma += a
    a++
}
console.log(suma)

let b= 0
let operacion = 0

do {
    operacion += b
    b++
} while(b <=100)
    console.log(operacion)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <=50; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

let c = 0
while (c <= 50) {
    if(c % 2 == 0) {
        console.log(c)
    }
    c++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["pepito", "juanito", "marisa", "pepita"]
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

let x = 0
while (x < myArray.length) {
    console.log(myArray[x])
    x++
}

for (let name of myArray) {
    console.log(name)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myString = "Hola que ase"
let vocales= "aeiouAEIOU"
let sumaVocal = 0
for(let i = 0; i < myString.length; i++) {
    if(vocales.includes(myString[i])) {
        sumaVocal++
    }
}
console.log(sumaVocal)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myNumber = [1, 2, 3, 4, 5]
let multiplicacion = 1
for(let number of myNumber) {
    multiplicacion *= number[i]
    console.log(multiplicacion)
}


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10