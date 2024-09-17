/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea
//Esto es un comentario en una sola línea.

// 2. Escribe un comentario en varias líneas
/*Esto es un 
comentario en
varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
// 4. Imprime por consola el valor de todas las variables
let myString = "Esto es una string";
console.log(myString);

let myNumber = 9;
console.log(myNumber);

let myBoolean = true;
let myOtherBoolean = false;
console.log(myBoolean);
console.log(myOtherBoolean);

let myUndef
console.log(myUndef);

let myNull = null;
console.log(myNull);

let mySymbol = Symbol ("misimbolo");
console.log(mySymbol);

let myBigInt= BigInt (7347347893724987328947387489);
let myBigInt2 = 457475757295720579724357257n;
console.log(myBigInt);
console.log(myBigInt2);


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myOtherBoolean);
console.log(typeof myUndef);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Mi nombre es Maria"
console.log(myString);

myNumber = 33;
console.log(myNumber);

myBoolean = false;
myOtherBoolean = true;
console.log(myBoolean);
console.log(myOtherBoolean);

mySymbol = ("He cambiado el valor de mySymbol");
console.log(mySymbol);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 90;
console.log(myString);

myNumber = "Ya no soy un número";
console.log(myNumber);

myBoolean = "Ahora soy string";
console.log(myBoolean);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constanteString = "Soy una string constante";
console.log(constanteString);

const constanteNumber = 123;
console.log(constanteNumber);

const constanteBool = true;
const constanteBool2 = false;
console.log(constanteBool);
console.log(constanteBool2);

/*const constanteUndef*/
console.log(constanteUndef) //Una constante no se puede dejar sin inicializar.

const constantenNull = null;
console.log(constantenNull);

// 9. A continuación, modifica los valores de las constantes

<<<<<<< HEAD
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
// Las constantes no pueden cambiar de valor una vez se han inicializado.
=======
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
>>>>>>> af1c97bc2ac92b5c42ce9a29a8ebd234e226ee90
