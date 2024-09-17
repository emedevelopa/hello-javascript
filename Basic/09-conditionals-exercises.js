/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Maria"
if (nombre == "Maria") {
    console.log(`Mi nombre es ${nombre}`)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "eme"
let pass = 1234
if(user =="eme" && pass == 1234) {
    console.log("Bienvenida eme!")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num=-16
if(num = 0){
    console.log("Es cero")
}else if (num > 0) {
    console.log("Es positivo")
} else {
    console.log("Es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15
if (edad >= 18) {
    console.log("Puede votar")
} else {
    console.log(`Es menor de edad. Le faltan ${18 - edad} años para poder votar.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const adultoMenor = edad == 18 ? "Adulto" : "Menor"
console.log(adultoMenor)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Mayo"
if (mes === "Enero" || mes === "Febrero" || mes === "Marzo") {
    console.log("Invierno")
} else if (mes === "Abril" || mes === "Mayo" || mes === "Junio") {
    console.log("Primavera")
} else if (mes === "Julio" || mes === "Agosto" || mes === "Septiembre") {
    console.log("Verano")
} else {
    console.log("Otoño")
}

/*let mes = "Mayo"
let estacion

switch (mes) {
    case "Enero":
    case "Febrero":
    case "Marzo":
        estacion = "Invierno";
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        estacion = "Primavera";
        break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
        estacion = "Verano";
        break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        estacion = "Otoño";
        break;
    default:
        estacion = "Estación incorrecta";
}
console.log(estacion)*/

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias
if(mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre" || mes === "Diciembre") {
    dias = 31
} else if (mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
    dias = 30
} else if (mes === "Febrero") {
    dias = 28
} else {
    console.log("Mes incorrecto")
}
console.log(dias)



// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "eaa"
let saludo
switch (idioma) {
    case "español":
        saludo = "Hola"
        break
    case "ingles":
        saludo = "Hello"
        break
    case "catalan":
        saludo = "Bon dia"
        break
    default:
        saludo = "Mi no entender"
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case "Enero":
    case "Mayo":
    case "Marzo":
    case "Julio":
    case "Agosto":
    case "Diciembre":
        dias = 31;
        break;
    case "Abril":
    case "Septiembre":
    case "Junio":
    case "Noviembre":
        dias = 30;
        break;
    case "Febrero":
        dias = 28;
        break;
    default:
        estacion = "Mes incorrecto";
}
console.log(dias)