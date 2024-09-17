/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático

class Person {
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    walk() {
        console.log(`La persona que se llama ${this.nombre} y que tiene ${this.edad} años, camina.`)
    }
    static sum (a, b) {
        return a + b
    }
}
let persona = new Person ("Maria", 33)
console.log(persona)
persona.walk()
console.log(Person.sum(3, 5))

// 6. Crea una clase que haga uso de herencia

class Animal {
    constructor (nombre) {
        this.nombre = nombre
    }
        sound() {
            console.log("El animal emite un sonido genérico")
            }
    }


class Dog extends Animal {
    sound() {
        console.log("Guau")
    }

}
let myDog = new Dog("pipo")
console.log(myDog)
myDog.sound()


// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores


class Private {
    #color

    constructor(nombre, edad, color) {
        this._nombre = nombre
        this.edad = edad
        this.#color = color
    }
    get nombre() {
        return this._nombre
    }
    set edad(edad) {
        this._edad = edad
    }
    get color() {
        return this.#color
    }
}
let clasePrivada = new Private("Maria", 33, "verde")
console.log(clasePrivada.nombre)
console.log(Private.edad = 44)
console.log(clasePrivada)
console.log(clasePrivada.color)


// 10. Sobrescribe un método de una clase que utilice herencia 
class  