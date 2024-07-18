/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let myString = "Holi";
let myString2 = " me llamo Maria";
let resultado = myString + myString2;
console.log(resultado);


// 2. Muestra la longitud de una cadena de texto
let cadenaLong = "Quiero saber cómo de larga es mi cadena";
console.log(cadenaLong.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadenaLong[0])
console.log(cadenaLong[cadenaLong.length -1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadenaLong.toUpperCase());
console.log(cadenaLong.toLocaleLowerCase());


// 5. Crea una cadena de texto en varias líneas
let saludo = `Si quiero
mi cadena en varias
lineas, tengo que
usar backticks`;
console.log(saludo);

// 6. Interpola el valor de una variable en un string
let cadena = "Esta es mi cadena de ";
console.log(`${cadena}texto`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadenaLong.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadenaLong.includes("larga"));

// 9. Comprueba si dos strings son iguales
console.log(cadenaLong === cadena);

// 10. Comprueba si dos strings tienen la misma longitud
let x = "hola"
let y ="mola"
console.log(x.length == y.length);