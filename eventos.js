const h1 = document.querySelector ("h1");
const input1 = document.querySelector ("#cálculo1");
const input2 = document.querySelector ("#cálculo2");
const btn = document.querySelector ("#btnCalcular");
const pResultado = document.querySelector ("#resultado");

btn.addEventListener ('click',btnOnClick);

function btnOnClick () {
  const sumaInputs = input1.value + input2.value;
  pResultado.innerHTML = "Resultado: " + sumaInputs;
}