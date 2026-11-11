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
const botonsTema = document.querySelectorAll("[data-tema]");

botonsTema.forEach(function (boto) {
  boto.addEventListener("click", function () {
    temaActual = boto.dataset.tema;
    comencarJoc(); // aquesta funció la fa el Biel
  });
});

document.getElementById("boto-canviar-nom").addEventListener("click", function () {
  mostrarPantalla("pantalla-inici");
  inputNom.focus();
});


// ===== 3. Joc principal (Biel) =====
const etiquetaTema = document.getElementById("etiqueta-tema");
const comptador = document.getElementById("comptador");
const textPregunta = document.getElementById("text-pregunta");
const contenidorOpcions = document.getElementById("opcions");
const textPunts = document.getElementById("punts");
const lletres = ["A", "B", "C", "D"];

// La crida la tria de tema (Anthony) quan es clica Jugar
function comencarJoc() {
  llistaPreguntes = preguntes[temaActual];
  preguntaActual = 0;
  punts = 0;
  respostes = [];

  etiquetaTema.textContent = temaActual === "esports" ? "Esports" : "Menjar";
  mostrarPantalla("pantalla-pregunta");
  mostrarPregunta();
}

// Posa a la pantalla la pregunta que toca i les seves opcions
function mostrarPregunta() {
  const pregunta = llistaPreguntes[preguntaActual];

  comptador.textContent = "Pregunta " + (preguntaActual + 1) + " de " + llistaPreguntes.length;
  textPregunta.textContent = pregunta.pregunta;
  textPunts.textContent = punts;

  contenidorOpcions.innerHTML = ""; // treure les opcions d'abans
  pregunta.opcions.forEach(function (opcio, index) {
    const boto = document.createElement("button");
    boto.className = "opcio";

    const lletra = document.createElement("span");
    lletra.className = "lletra";
    lletra.textContent = lletres[index];

    boto.appendChild(lletra);
    boto.appendChild(document.createTextNode(opcio));
    boto.addEventListener("click", function () {
      respondre(index);
    });

    contenidorOpcions.appendChild(boto);
  });

  iniciarTemporitzador();
}

// index = posició de l'opció triada (-1 si s'ha acabat el temps)
function respondre(index) {
  aturarTemporitzador();

  const pregunta = llistaPreguntes[preguntaActual];
  const encertada = index === pregunta.correcta;
  if (encertada) {
    punts++;
  }

  // per al resum de la pantalla de resultats
  respostes.push({ pregunta: pregunta.pregunta, encertada: encertada });

  preguntaActual++;
  if (preguntaActual < llistaPreguntes.length) {
    mostrarPregunta();
  } else {
    mostrarResultats(); // la fa l'Anthony
  }
}


// ===== Temporitzador (Biel) =====
const textTemps = document.getElementById("temps");
const barraTemps = document.getElementById("barra-temps-restant");
let tempsRestant = 0;

function iniciarTemporitzador() {
  aturarTemporitzador();
  tempsRestant = TEMPS_PER_PREGUNTA;

  // la barra torna a estar plena de cop, sense animació
  barraTemps.style.transition = "none";
  actualitzarTemps();
  barraTemps.offsetWidth; // força el navegador a aplicar el canvi
  barraTemps.style.transition = "";

  temporitzador = setInterval(function () {
    tempsRestant--;
    actualitzarTemps();

    if (tempsRestant <= 0) {
      respondre(-1); // s'ha acabat el temps: compta com a fallada
    }
  }, 1000);
}

function aturarTemporitzador() {
  clearInterval(temporitzador);
}

function actualitzarTemps() {
  textTemps.textContent = tempsRestant;
  barraTemps.style.width = (tempsRestant / TEMPS_PER_PREGUNTA) * 100 + "%";
}


// ===== 4. Resultats i tornar a jugar (Anthony) =====
function mostrarResultats() {
  document.getElementById("nom-resultats").textContent = nomJugador;
  document.getElementById("tema-resultats").textContent = temaActual === "esports" ? "Esports" : "Menjar";
  document.getElementById("puntuacio").textContent = punts + "/" + llistaPreguntes.length;

  const resum = document.getElementById("resum");
  resum.innerHTML = ""; // treure les línies d'exemple

  respostes.forEach(function (resposta) {
    const li = document.createElement("li");
    li.className = resposta.encertada ? "correcta" : "incorrecta";

    const text = document.createElement("span");
    text.className = "resum-text";
    text.textContent = resposta.pregunta;

    const estat = document.createElement("span");
    estat.className = "resum-estat";
    estat.textContent = resposta.encertada ? "Correcta" : "Incorrecta";

    li.appendChild(text);
    li.appendChild(estat);
    resum.appendChild(li);
  });

  mostrarPantalla("pantalla-resultats");
}

document.getElementById("boto-tornar").addEventListener("click", function () {
  mostrarPantalla("pantalla-tema");
});

document.getElementById("boto-sortir").addEventListener("click", function () {
  nomJugador = "";
  inputNom.value = "";
  mostrarPantalla("pantalla-inici");
});

// Pantalla que es veu en obrir el joc.
// Mentre programem, es pot canviar l'id per provar una altra pantalla.
mostrarPantalla("pantalla-inici");
