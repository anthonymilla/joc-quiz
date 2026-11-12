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
    },
    {
      pregunta: "En quin esport es pot fer un triple?",
      opcions: ["Futbol", "Bàsquet", "Tennis", "Natació"],
      correcta: 1
    },
    {
      pregunta: "Cada quants anys es fan els Jocs Olímpics?",
      opcions: ["2", "3", "4", "5"],
      correcta: 2
    },
    {
      pregunta: "Quin esport es fa al Tour de França?",
      opcions: ["Atletisme", "Ciclisme", "Motociclisme", "Triatló"],
      correcta: 1
    },
    {
      pregunta: "Quants sets s'han de guanyar en un partit masculí de Grand Slam de tennis?",
      opcions: ["2", "3", "4", "5"],
      correcta: 1
    }
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
  ],

  geografia: [
    {
      pregunta: "Quina és la capital de França?",
      opcions: ["Londres", "París", "Roma", "Berlín"],
      correcta: 1
    },
    {
      pregunta: "Quin és l'oceà més gran del món?",
      opcions: ["Atlàntic", "Índic", "Pacífic", "Àrtic"],
      correcta: 2
    },
    {
      pregunta: "En quin continent hi ha el Marroc?",
      opcions: ["Àsia", "Europa", "Àfrica", "Amèrica"],
      correcta: 2
    },
    {
      pregunta: "Quina és la muntanya més alta del món?",
      opcions: ["Kilimanjaro", "Everest", "Aneto", "Mont Blanc"],
      correcta: 1
    },
    {
      pregunta: "Quina és la capital de Catalunya?",
      opcions: ["Girona", "Tarragona", "Barcelona", "Lleida"],
      correcta: 2
    }
  ],

  videojocs: [
    {
      pregunta: "Com es diu el fontaner protagonista dels jocs de Nintendo?",
      opcions: ["Luigi", "Mario", "Link", "Sonic"],
      correcta: 1
    },
    {
      pregunta: "De quin color és Sonic?",
      opcions: ["Vermell", "Verd", "Blau", "Groc"],
      correcta: 2
    },
    {
      pregunta: "En quin joc es construeix amb blocs i s'ha de vigilar amb els creepers?",
      opcions: ["Fortnite", "Minecraft", "Roblox", "Tetris"],
      correcta: 1
    },
    {
      pregunta: "Quina empresa fabrica la consola PlayStation?",
      opcions: ["Nintendo", "Microsoft", "Sony", "Sega"],
      correcta: 2
    },
    {
      pregunta: "Com es diu el protagonista de The Legend of Zelda?",
      opcions: ["Zelda", "Link", "Ganon", "Epona"],
      correcta: 1
    }
  ]
};
