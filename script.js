// const h1 = document.querySelector("h1");
// const p = document.querySelectorAll("p");
// const parrafo = document.querySelector(".parrafo");
// const parrafoId = document.querySelector("#parrafoId");
// const placeholder = document.querySelector("input")
// console.log(h1)
//     console.log({
//         h1,
//         p,
//         parrafo,
//         parrafoId,
//         placeholder
//     })
// parrafo.classList.add("rojo")
// parrafo.classList.remove("parrafo")
// const img = document.createElement("img");
// placeholder.value = "789"
// console.log(img)
// img.setAttribute("src", "./descarga.jpg") 
// parrafoId.innerHTML = ""
// parrafoId.append(img)

// const calculo = document.getElementById("calculo");
// const calculo2 = document.getElementById("calculo2");
// const btnCalcular = document.getElementById("btnCalcular")
// const respuesta1 = document.getElementById("respuesta")
// const formulario1 = document.getElementById("formulario")

// formulario1.addEventListener('submit', calcular)
// function calcular (e){
//     e.preventDefault()
//     const suma  = parseInt(calculo.value) + parseInt(calculo2.value);
//     respuesta1.append(suma)
// }
const button = document.querySelector("button");
const action = () => alert("Hello!");
const toggle = () => button.classList.toggle("red");

button.addEventListener("click", action);         // Hello message
button.addEventListener("click", toggle);  
 