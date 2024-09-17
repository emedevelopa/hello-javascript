/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Captura una excepción utilizando try-catch
let myVar

try {
    console.log(myVar.name)

}catch (error){
    console.log("Se ha producido un error:", error.message)

}

// 2. Captura una excepción utilizando try-catch y finally
let myVar2

try {
    console.log(myVar2.name)

}catch (error){
    console.log("Se ha producido un error:", error.message)

} finally {
    console.log("Fin")
}

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10