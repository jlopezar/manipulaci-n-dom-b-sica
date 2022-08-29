console.log ("Hellow, world");

// Sintaxis de CSS
// h1 {color: red}
// .parrafito {...}  (class)
// #pid {...}        (id)


const h1 = document.querySelector ("h1");
const p = document.querySelector ("p");
const parrafito = document.getElementsByClassName ("parrafito");
const pid = document.getElementById ("pid");
const input = document.querySelector ("input");


console.log (h1);

console.log (input.value);

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input,

});

h1.innerHTML = "Patito <br> feo";
h1.innerText = "Patito <br> feo"; // No convierte todo a código HTML, solo a texto.

console.log (h1.getAttribute ("pantalla")); // Hemos puesto y borrado en HTML <h1 pantalla = "plaztyLG">

//h1. setAttribute ("class", "rojo");

h1.classList.add ("rojo");
h1.classList.remove ("rojo");

input.value = "456";

console.log (document.createElement ("img"));

const img = document.createElement ("img");
img.setAttribute ("src", "https://static8.depositphotos.com/1020804/1063/i/950/depositphotos_10634883-stock-photo-strawberries-with-leaves.jpg");


console.log (img);

pid.append (img);

pid.innerHTML ="";
pid.appendChild (img);




