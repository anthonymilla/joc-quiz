// Preguntes del joc, separades per tema.
// Cada pregunta té el text, les opcions i la posició de la resposta correcta
// (la primera opció és la 0, la segona la 1...).
//
// Esports: Biel
// Menjar: Anthony

const preguntes = {
  esports: [
    {
      pregunta: "Quants jugadors té un equip de futbol al camp?",
      opcions: ["9", "10", "11", "12"],
      correcta: 2
    }
    // TODO (Biel): afegir més preguntes d'esports
  ],

  menjar: [
    {
      pregunta: "D'on és típica la paella?",
      opcions: ["València", "Galícia", "Astúries", "Andalusia"],
      correcta: 0
    },
    {
      pregunta: "Quin és l'ingredient principal del guacamole?",
      opcions: ["Tomàquet", "Alvocat", "Ceba", "Pebrot"],
      correcta: 1
    },
    {
      pregunta: "Quin d'aquests elements NO porta una truita de patates tradicional?",
      opcions: ["Ou", "Patata", "Chorizo", "Ceba"],
      correcta: 2
    },
    {
      pregunta: "Quin d'aquests plats és un postre típic català?",
      opcions: ["Crema catalana", "Gaspatxo", "Fabada", "Paella"],
      correcta: 0
    }
  ]
};
