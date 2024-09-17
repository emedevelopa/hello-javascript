/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética
let a = 7;
let b =3;

let mySuma = a + b;
console.log(mySuma);

let myResta = a - b;
console.log(myResta);

let myMulti = a * b;
console.log(myMulti);

let myDiv = a / b;
console.log(myDiv);

let myModulo = a % b;
console.log(myModulo);

let myExpo = a ** b;
console.log(myExpo);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
mySuma += 2;
console.log(mySuma);

myResta -= 1;
console.log(myResta);

myMulti *= 2;
console.log(myMulti);

myDiv /= 3;
console.log(myDiv);

myModulo %= 3;
console.log(myModulo);

myExpo **= 3;
console.log(myExpo);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
let c = 30;
let d = 40;
console.log(c < d);
console.log(d > c);
console.log(c != d);
console.log(c <= d);
console.log(d >= c);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(c > d);
console.log(d < c);
console.log(c == d);
console.log(c >= d);
console.log(d <= c);

// 5. Utiliza el operador lógico and
console.log(2 > 1 && 3 > 2);
console.log(4 > 2 && 6 > 9);

// 6. Utiliza el operador lógico or
console.log(13 < 10 || 4 < 10);
console.log(2 < 1 || 4 < 2);

// 7. Combina ambos operadores lógicos
console.log(5 > 2 && 3 < 5 || 6 > 12 && 12 < 10)

// 8. Añade alguna negación
console.log(c != d);

// 9. Utiliza el operador ternario
const isSunny = true;
isSunny ? console.log("I'm happy") : console.log("I'm sad");


// 10. Combina operadores aritméticos, de comparáción y lógicas
let myVar = 34;
let myVar2 = 16;

let resultado = myVar + myVar2;
console.log(resultado);

resultado -= 20;
console.log(resultado);

console.log(resultado > 70);
console.log(resultado < 70 && 50 < 100);
