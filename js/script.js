// ===== Variables del joc =====
let nomJugador = "";
let temaActual = "";      // "esports" o "menjar"
let llistaPreguntes = []; // preguntes del tema triat
let preguntaActual = 0;   // posició de la pregunta que es mostra
let punts = 0;
let respostes = [];       // per a cada pregunta, si s'ha encertat o no (per al resum final)
let temporitzador = null; // aquí guardarem el setInterval del compte enrere

const TEMPS_PER_PREGUNTA = 15; // segons


// ===== Canviar de pantalla =====
// Amaga totes les pantalles i mostra només la que li passem.
// Ids: "pantalla-inici", "pantalla-tema", "pantalla-pregunta", "pantalla-resultats"
function mostrarPantalla(id) {
  const pantalles = document.querySelectorAll(".pantalla");

  pantalles.forEach(function (pantalla) {
    pantalla.classList.remove("activa");
  });

  document.getElementById(id).classList.add("activa");
}


// ===== 1. Inici (Anthony) =====
const formNom = document.getElementById("form-nom");
const inputNom = document.getElementById("input-nom");
const errorNom = document.getElementById("error-nom");

formNom.addEventListener("submit", function (event) {
  event.preventDefault(); // perquè la pàgina no es recarregui

  const nom = inputNom.value.trim();
  if (nom === "") {
    errorNom.textContent = "Has d'escriure el teu nom";
    return;
  }

  errorNom.textContent = "";
  nomJugador = nom;
  document.getElementById("nom-jugador").textContent = nomJugador;
  mostrarPantalla("pantalla-tema");
});


// ===== 2. Tria de tema (Anthony) =====
// TODO: mostrar "Hola, [nom]!" i, en clicar Jugar, guardar el tema (data-tema)
// i començar el joc


// ===== 3. Joc principal (Biel) =====
// TODO: mostrar la pregunta i les opcions, comprovar la resposta,
// sumar punts i passar a la següent


// ===== Temporitzador (Biel) =====
// TODO: compte enrere de TEMPS_PER_PREGUNTA segons per a cada pregunta.
// Si s'acaba el temps, compta com a fallada i es passa a la següent.


// ===== 4. Resultats i tornar a jugar (Anthony) =====
// TODO: mostrar la puntuació i el resum de respostes,
// i fer funcionar els botons de tornar a jugar i sortir


// Pantalla que es veu en obrir el joc.
// Mentre programem, es pot canviar l'id per provar una altra pantalla.
mostrarPantalla("pantalla-inici");
