import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
//
let tituloElemnto = document.getElementById("titulo");
let subTituloElemnto = document.getElementById("subtitulo");
let parrafoElemnto = document.getElementById("parrafo");
let precioElemnto = document.getElementById("precio");

//agregar evento click a ca da elemento
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover la clase "active" de todoslos enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //agregar clase "active" al enlace actual
    this.classList.add("active");
    //obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent);
    //mostrar el contenido en el DOM
    tituloElemnto.innerHTML = contenido.titulo;
    subTituloElemnto.innerHTML = contenido.subtitulo;
    parrafoElemnto.innerHTML = contenido.parrafo;
    precioElemnto.innerHTML = contenido.precio;

  });
});

//traer informacion correspondiente desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    Paris: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
