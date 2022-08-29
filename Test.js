
// Variables.
let nombre = "José"
let apellidos = "López Arribas"
let nombreUsuarioPlazty = "jlopezar"
let edad = 37
let mail = "j.lopezar88@gmail.com"
let esmayorEdad = true
let dineroAhorrado = 2000
let deudas = 100

let Nombre = nombre + "" + apellidos;
let Dinero = dineroAhorrado - deudas;



//Funciones. 

function saludo (nombreCompleto, mote) {
    console.log (`Mi nombre es ${nombreCompleto}, pero prefiero que me llames ${mote}`);
}
// Profesor. (No me funciona)

function saludo (name, lastName, nickName) {
    const completeName = nombreCompleto (name, lastName);
    console.log ("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");
}


// Condicionales. (No me funciona)

const tipoDeSuscripción = "Free"

if (tipoDeSuscripción == "Free") {
    console.log (`Tienes acceso a los cursos gratis`);
} else if (tipoDeSuscripción == "Basic") {
    console.log (`Tienes acceso a casi todos los cursos por un mes`);
} else if (tipoDeSuscripción == "Expert") {
    console.log (`Tienes acceso a casi todos los cursos por un año`);
} else if  (tipoDeSuscripción == "ExpertDuo") {
    console.log (`Tú y alguien más tenéis acceso a todos los cursos por un año`);
}


//Ciclos.

let i = 0;

while (i < 5) {
    console.log ("El valor de i es:" +i);
    i++; // ponemos el incremento aquí para evitar el ciclo infinito. Se va a estar ejecutando hasta que llegue a 4, es decir, menos que 5.
}

let i = 10;
while (i >= 2) {
    console.log ("El valor de i es:" +i);
    i--;
}

let respuesta;

while (respuesta != "4") {
    let pregunta = prompt ("Cuánto es 2 + 2");
    respuesta = pregunta;
}


// Arrays.

function imprimirPrimerElementoDelArray (arr) {
    console.log (arr[0]);
}
imprimirPrimerElementoDelArray ("Totti", "Messi", "Maldini"); //no me funciona.


function imprimirElementoPorElemento (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log (arr [i]);
    }
    }
imprimirElementoPorElemento (["Coche", "Moto", "Pared"]);



// Objetos.

const objeto = {
    nombre: "Fulanito",
    edad: 3,
    comidasFavoritas : ["Pollo frito", "vegetales"],
}

Object.values (objeto);

function imprimirElementoPorElementoObjeto (objeto) {
    const arr = Object.value (objeto);
    for (let i = 0; i < arr.lentgh; i++) {
        console.log (arr [i]);
    }
}


// Pregunta Bonus: reducción de condicionales.

function () {
    if (basic) {
        // queremos que aquí termine la función.
        return;
    } else if () {

    }
}


function conseguirTipoDeSuscripcion (suscripción) {
    if (suscripción == "Free") {
        console.log (`Tienes acceso a los cursos gratis`);
        return;
}

    if (suscripción == "Basic") {
        console.log (`Tienes acceso a casi todos los cursos por un mes`);
        return;
} 

    if (suscripción == "Expert") {
        console.log (`Tienes acceso a casi todos los cursos por un año`);
        return;
} 

    if  (suscripción == "ExpertDuo") {
        console.log (`Tú y alguien más tenéis acceso a todos los cursos por un año`);
        return;
}
    console.warn ("Ese tipo de suscripción no existe");
}


// Con un solo condicional

const tipoDeSuscripciones = {
    free: "Tienes acceso a los cursos gratis",
    basic: "Tienes acceso a casi todos los cursos por un mes",
    expert: "Tienes acceso a casi todos los cursos por un año",
    expertduo: "Tú y alguien más tenéis acceso a todos los cursos por un año",
}

        //para acceder al objeto: tipoDeSuscripciones. free es igual que tipoDeSuscripciones ["free"]

const ejemploSuscripcion = free;
tipoDeSuscripciones [ejemploSuscripcion];

function conseguirTipoDeSuscripcion (suscripción) {
    if (tipoDeSuscripciones [suscripción]) {
        console.log (tipoDeSuscripciones [suscripción]);
        return;
    }
}

