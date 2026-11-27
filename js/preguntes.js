// Preguntes del joc, separades per tema.
// Cada pregunta té el text, les opcions i la posició de la resposta correcta
// (la primera opció és la 0, la segona la 1...).
//
// Esports i Geografia: Biel
// Menjar i Videojocs: Anthony

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
    },
    {
      pregunta: "Quants punts val una cistella normal (no triple) en bàsquet?",
      opcions: ["2", "1", "3", "4"],
      correcta: 0
    },
    {
      pregunta: "En quin esport es fa servir un volant en lloc d'una pilota?",
      opcions: ["Tennis", "Bàdminton", "Pàdel", "Esquaix"],
      correcta: 1
    },
    {
      pregunta: "Quants jugadors té un equip de bàsquet a la pista?",
      opcions: ["4", "6", "5", "7"],
      correcta: 2
    },
    {
      pregunta: "Quants jugadors té un equip de voleibol a la pista?",
      opcions: ["5", "7", "8", "6"],
      correcta: 3
    },
    {
      pregunta: "Quina distància té una marató?",
      opcions: ["42,195 km", "21,097 km", "50 km", "30 km"],
      correcta: 0
    },
    {
      pregunta: "En quin esport destaca Rafa Nadal?",
      opcions: ["Golf", "Tennis", "Pàdel", "Bàsquet"],
      correcta: 1
    },
    {
      pregunta: "De quin color és el mallot del líder del Tour de França?",
      opcions: ["Verd", "Vermell", "Groc", "Rosa"],
      correcta: 2
    },
    {
      pregunta: "Quantes voltes a la pista té una cursa de 400 metres?",
      opcions: ["2", "4", "Mitja volta", "1"],
      correcta: 3
    },
    {
      pregunta: "Com es diu el torneig de tennis que es juga sobre gespa a Londres?",
      opcions: ["Wimbledon", "Roland Garros", "US Open", "Open d'Austràlia"],
      correcta: 0
    },
    {
      pregunta: "En quin esport es pot fer un home run?",
      opcions: ["Criquet", "Beisbol", "Rugbi", "Hoquei"],
      correcta: 1
    },
    {
      pregunta: "Quants anells té el símbol dels Jocs Olímpics?",
      opcions: ["4", "6", "5", "7"],
      correcta: 2
    },
    {
      pregunta: "Quina selecció va guanyar el Mundial de futbol del 2010?",
      opcions: ["Alemanya", "Brasil", "Itàlia", "Espanya"],
      correcta: 3
    },
    {
      pregunta: "Quant dura un partit de futbol sense pròrroga?",
      opcions: ["90 minuts", "80 minuts", "100 minuts", "60 minuts"],
      correcta: 0
    },
    {
      pregunta: "En quin esport s'anota un touchdown?",
      opcions: ["Rugbi", "Futbol americà", "Hoquei gel", "Handbol"],
      correcta: 1
    },
    {
      pregunta: "Quants jugadors té un equip d'handbol a la pista (porter inclòs)?",
      opcions: ["6", "8", "7", "5"],
      correcta: 2
    },
    {
      pregunta: "Quin esportista té més medalles olímpiques de la història?",
      opcions: ["Usain Bolt", "Carl Lewis", "Mark Spitz", "Michael Phelps"],
      correcta: 3
    },
    {
      pregunta: "En quin esport es fa servir un stick i un disc anomenat puck?",
      opcions: ["Hoquei gel", "Curling", "Lacrosse", "Hoquei herba"],
      correcta: 0
    },
    {
      pregunta: "En quin esport es competeix dins d'un ring?",
      opcions: ["Natació", "Boxa", "Esgrima", "Tir amb arc"],
      correcta: 1
    },
    {
      pregunta: "Quants forats té un recorregut complet de golf?",
      opcions: ["9", "12", "18", "24"],
      correcta: 2
    },
    {
      pregunta: "Quin país va organitzar els Jocs Olímpics del 1992?",
      opcions: ["França", "Itàlia", "Estats Units", "Espanya"],
      correcta: 3
    },
    {
      pregunta: "Quin jugador de futbol pot tocar la pilota amb les mans dins de l'àrea?",
      opcions: ["Porter", "Defensa", "Migcampista", "Davanter"],
      correcta: 0
    },
    {
      pregunta: "En quin esport es fan servir els estils crol, braça i esquena?",
      opcions: ["Atletisme", "Natació", "Ciclisme", "Rem"],
      correcta: 1
    },
    {
      pregunta: "Quants sets s'han de guanyar per guanyar un partit de voleibol?",
      opcions: ["2", "4", "3", "5"],
      correcta: 2
    },
    {
      pregunta: "En quin esport competeix Lewis Hamilton?",
      opcions: ["MotoGP", "Ral·lis", "Ciclisme", "Fórmula 1"],
      correcta: 3
    },
    {
      pregunta: "A quina alçada està la cistella de bàsquet?",
      opcions: ["3,05 metres", "2,80 metres", "3,50 metres", "2,50 metres"],
      correcta: 0
    },
    {
      pregunta: "Quin equip de futbol juga a l'estadi Camp Nou?",
      opcions: ["Reial Madrid", "FC Barcelona", "RCD Espanyol", "Girona FC"],
      correcta: 1
    },
    {
      pregunta: "En quin d'aquests esports es competeix amb un cavall?",
      opcions: ["Esgrima", "Rem", "Hípica", "Tir amb arc"],
      correcta: 2
    },
    {
      pregunta: "Quin esport practica Leo Messi?",
      opcions: ["Bàsquet", "Tennis", "Handbol", "Futbol"],
      correcta: 3
    },
    {
      pregunta: "Qui té el rècord del món dels 100 metres llisos?",
      opcions: ["Usain Bolt", "Carl Lewis", "Justin Gatlin", "Yohan Blake"],
      correcta: 0
    },
    {
      pregunta: "Quin d'aquests és considerat un esport mental?",
      opcions: ["Petanca", "Escacs", "Bitlles", "Dards"],
      correcta: 1
    },
    {
      pregunta: "Cada quants anys es juga el Mundial de futbol?",
      opcions: ["2", "3", "4", "5"],
      correcta: 2
    },
    {
      pregunta: "Quin esport es juga amb pala en una pista tancada amb parets de vidre i reixa?",
      opcions: ["Tennis", "Bàdminton", "Esquaix", "Pàdel"],
      correcta: 3
    },
    {
      pregunta: "Quina ciutat va organitzar els Jocs Olímpics del 2024?",
      opcions: ["París", "Londres", "Tòquio", "Los Angeles"],
      correcta: 0
    },
    {
      pregunta: "Com es diu el premi que guanya el millor jugador de futbol de l'any?",
      opcions: ["Bota d'Or", "Pilota d'Or", "Copa d'Or", "Guant d'Or"],
      correcta: 1
    },
    {
      pregunta: "En quin esport es juga la Copa Davis?",
      opcions: ["Golf", "Futbol", "Tennis", "Rugbi"],
      correcta: 2
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
    },
    {
      pregunta: "Amb quin fruit sec es fa el torró de Xixona?",
      opcions: ["Ametlla", "Avellana", "Nou", "Pinyó"],
      correcta: 0
    },
    {
      pregunta: "De quin país és originari el sushi?",
      opcions: ["Xina", "Corea del Sud", "Japó", "Tailàndia"],
      correcta: 2
    },
    {
      pregunta: "Quin ingredient dona el color verd al pesto genovès?",
      opcions: ["Julivert", "Espinacs", "Coriandre", "Alfàbrega"],
      correcta: 3
    },
    {
      pregunta: "Quin tipus de pasta té forma de llaç o papallona?",
      opcions: ["Penne", "Farfalle", "Fusilli", "Rigatoni"],
      correcta: 1
    },
    {
      pregunta: "Quina salsa es fa amb all i oli d'oliva?",
      opcions: ["Allioli", "Maionesa", "Romesco", "Salsa brava"],
      correcta: 0
    },
    {
      pregunta: "De quina fruita s'obté la passa?",
      opcions: ["Pruna", "Figa", "Raïm", "Dàtil"],
      correcta: 2
    },
    {
      pregunta: "Quin cereal s'utilitza principalment per fer el risotto?",
      opcions: ["Blat", "Ordi", "Civada", "Arròs"],
      correcta: 3
    },
    {
      pregunta: "D'on és originària la pizza Margherita?",
      opcions: ["Roma", "Nàpols", "Milà", "Florència"],
      correcta: 1
    },
    {
      pregunta: "Quin formatge s'utilitza tradicionalment per fer el tiramisú?",
      opcions: ["Mascarpone", "Ricotta", "Mozzarella", "Parmesà"],
      correcta: 0
    },
    {
      pregunta: "Quina espècia és la més cara del món i dona color groc a l'arròs?",
      opcions: ["Cúrcuma", "Pebre vermell", "Safrà", "Comí"],
      correcta: 2
    },
    {
      pregunta: "Quin és l'ingredient base de l'hummus?",
      opcions: ["Llenties", "Mongetes blanques", "Pèsols", "Cigrons"],
      correcta: 3
    },
    {
      pregunta: "Quin d'aquests aliments és un marisc?",
      opcions: ["Lluç", "Gamba", "Tonyina", "Salmó"],
      correcta: 1
    },
    {
      pregunta: "Com es diu el pa pla típic de l'Índia?",
      opcions: ["Naan", "Pita", "Baguette", "Focaccia"],
      correcta: 0
    },
    {
      pregunta: "Quina beguda es fa fermentant suc de poma?",
      opcions: ["Cervesa", "Vi blanc", "Sidra", "Vermut"],
      correcta: 2
    },
    {
      pregunta: "Quin és l'ingredient principal del gaspatxo andalús?",
      opcions: ["Cogombre", "Pebrot verd", "Pastanaga", "Tomàquet"],
      correcta: 3
    },
    {
      pregunta: "De quin animal prové la carn del pernil serrà?",
      opcions: ["Vedella", "Porc", "Xai", "Gall dindi"],
      correcta: 1
    },
    {
      pregunta: "Quin sucre es troba de manera natural a la llet?",
      opcions: ["Lactosa", "Fructosa", "Sacarosa", "Glucosa"],
      correcta: 0
    },
    {
      pregunta: "Quina fruita tropical té la pell punxeguda i un plomall de fulles a dalt?",
      opcions: ["Mango", "Papaia", "Pinya", "Coco"],
      correcta: 2
    },
    {
      pregunta: "Quin país és famós per la fondue de formatge?",
      opcions: ["Àustria", "Alemanya", "Bèlgica", "Suïssa"],
      correcta: 3
    },
    {
      pregunta: "Quin d'aquests bolets és molt apreciat a la cuina catalana a la tardor?",
      opcions: ["Xampinyó", "Rovelló", "Múrgola", "Tòfona blanca"],
      correcta: 1
    },
    {
      pregunta: "Quina verdura s'utilitza per fer el xucrut alemany?",
      opcions: ["Col", "Enciam", "Bleda", "Carxofa"],
      correcta: 0
    },
    {
      pregunta: "Quin d'aquests dolços porta cabell d'àngel a dins?",
      opcions: ["Ensaïmada", "Croissant", "Magdalena", "Xurro"],
      correcta: 0
    },
    {
      pregunta: "D'on s'extreu el cacau per fer xocolata?",
      opcions: ["D'una arrel", "D'una fulla", "D'una llavor", "De l'escorça"],
      correcta: 2
    },
    {
      pregunta: "Quin ingredient NO porta una salsa bolonyesa clàssica?",
      opcions: ["Carn picada", "Tomàquet", "Pastanaga", "Pinya"],
      correcta: 3
    },
    {
      pregunta: "Quin és el plat estrella dels calçots a Catalunya?",
      opcions: ["Els calçots amb salsa romesco", "Els calçots arrebossats", "La sopa de calçots", "Els calçots bullits"],
      correcta: 0
    },
    {
      pregunta: "Quin peix s'utilitza tradicionalment per fer l'esqueixada catalana?",
      opcions: ["Sardina", "Bacallà", "Verat", "Orada"],
      correcta: 1
    },
    {
      pregunta: "Quina fruita té més vitamina C per cada 100 grams que la taronja?",
      opcions: ["Poma", "Plàtan", "Kiwi", "Pera"],
      correcta: 2
    },
    {
      pregunta: "Com es diu la sopa freda típica de Rússia i Europa de l'Est feta amb remolatxa?",
      opcions: ["Goulash", "Minestrone", "Ramen", "Borscht"],
      correcta: 3
    },
    {
      pregunta: "Quin tipus d'oli és la base de la dieta mediterrània?",
      opcions: ["Oli de gira-sol", "Oli d'oliva", "Oli de coco", "Oli de blat de moro"],
      correcta: 1
    },
    {
      pregunta: "Quin formatge blau és originari de França?",
      opcions: ["Roquefort", "Manchego", "Brie", "Gouda"],
      correcta: 0
    },
    {
      pregunta: "Quina llegum s'utilitza per fer la fabada asturiana?",
      opcions: ["Llenties", "Cigrons", "Mongetes blanques", "Faves"],
      correcta: 2
    },
    {
      pregunta: "Quin ingredient fa pujar la massa del pa?",
      opcions: ["Sal", "Sucre", "Vinagre", "Llevat"],
      correcta: 3
    },
    {
      pregunta: "De quin país és típic el ceviche?",
      opcions: ["Mèxic", "Perú", "Argentina", "Brasil"],
      correcta: 1
    },
    {
      pregunta: "Quina fruita seca es fa servir per elaborar el massapà?",
      opcions: ["Ametlla", "Castanya", "Anacard", "Festuc"],
      correcta: 0
    },
    {
      pregunta: "Quin d'aquests aliments és un tubercle?",
      opcions: ["Carbassa", "Albergínia", "Patata", "Pebrot"],
      correcta: 2
    },
    {
      pregunta: "Quina beguda calenta s'obté de les fulles de la planta Camellia sinensis?",
      opcions: ["Cafè", "Infusió de camamilla", "Xocolata desfeta", "Te"],
      correcta: 3
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
    },
    {
      pregunta: "Quin és el país més gran del món per superfície?",
      opcions: ["Rússia", "Canadà", "Xina", "Estats Units"],
      correcta: 0
    },
    {
      pregunta: "Quina és la capital d'Itàlia?",
      opcions: ["Milà", "Roma", "Nàpols", "Venècia"],
      correcta: 1
    },
    {
      pregunta: "Quin és el desert càlid més gran del món?",
      opcions: ["Gobi", "Atacama", "Sàhara", "Kalahari"],
      correcta: 2
    },
    {
      pregunta: "Quina és la capital de Portugal?",
      opcions: ["Porto", "Braga", "Coïmbra", "Lisboa"],
      correcta: 3
    },
    {
      pregunta: "Quin és el continent amb més habitants?",
      opcions: ["Àsia", "Àfrica", "Europa", "Amèrica"],
      correcta: 0
    },
    {
      pregunta: "Quina és la capital del Japó?",
      opcions: ["Osaka", "Tòquio", "Kyoto", "Seül"],
      correcta: 1
    },
    {
      pregunta: "Quin riu passa per Saragossa?",
      opcions: ["Tajo", "Duero", "Ebre", "Guadalquivir"],
      correcta: 2
    },
    {
      pregunta: "Quantes províncies té Catalunya?",
      opcions: ["2", "3", "5", "4"],
      correcta: 3
    },
    {
      pregunta: "Quin és el país amb més habitants del món?",
      opcions: ["Índia", "Xina", "Estats Units", "Indonèsia"],
      correcta: 0
    },
    {
      pregunta: "Quina és la capital d'Alemanya?",
      opcions: ["Munic", "Berlín", "Hamburg", "Frankfurt"],
      correcta: 1
    },
    {
      pregunta: "En quin país hi ha la Torre Eiffel?",
      opcions: ["Bèlgica", "Itàlia", "França", "Suïssa"],
      correcta: 2
    },
    {
      pregunta: "Quina serralada separa Catalunya de França?",
      opcions: ["Alps", "Andes", "Apenins", "Pirineus"],
      correcta: 3
    },
    {
      pregunta: "Quina és la capital del Regne Unit?",
      opcions: ["Londres", "Manchester", "Edimburg", "Liverpool"],
      correcta: 0
    },
    {
      pregunta: "Quin és el país més gran de Sud-amèrica?",
      opcions: ["Argentina", "Brasil", "Perú", "Colòmbia"],
      correcta: 1
    },
    {
      pregunta: "Quin mar banya la costa de Catalunya?",
      opcions: ["Mar del Nord", "Mar Cantàbric", "Mar Mediterrani", "Mar Negre"],
      correcta: 2
    },
    {
      pregunta: "Quina és la capital d'Austràlia?",
      opcions: ["Sydney", "Melbourne", "Perth", "Canberra"],
      correcta: 3
    },
    {
      pregunta: "Quin és el riu més llarg de la península Ibèrica?",
      opcions: ["Tajo", "Ebre", "Duero", "Guadiana"],
      correcta: 0
    },
    {
      pregunta: "En quin continent hi ha Egipte?",
      opcions: ["Àsia", "Àfrica", "Europa", "Oceania"],
      correcta: 1
    },
    {
      pregunta: "Quina és la capital del Canadà?",
      opcions: ["Toronto", "Vancouver", "Ottawa", "Mont-real"],
      correcta: 2
    },
    {
      pregunta: "Quin és el llac més gran d'Àfrica?",
      opcions: ["Txad", "Tanganyika", "Malawi", "Victòria"],
      correcta: 3
    },
    {
      pregunta: "Quina és la muntanya més alta de Catalunya?",
      opcions: ["Pica d'Estats", "Aneto", "Puigmal", "Canigó"],
      correcta: 0
    },
    {
      pregunta: "Quina és la capital de Grècia?",
      opcions: ["Tessalònica", "Atenes", "Esparta", "Heraklion"],
      correcta: 1
    },
    {
      pregunta: "Quin país té forma de bota?",
      opcions: ["Grècia", "Portugal", "Itàlia", "Croàcia"],
      correcta: 2
    },
    {
      pregunta: "Quin oceà separa Europa d'Amèrica?",
      opcions: ["Pacífic", "Índic", "Àrtic", "Atlàntic"],
      correcta: 3
    },
    {
      pregunta: "Quina és la capital de Mèxic?",
      opcions: ["Ciutat de Mèxic", "Guadalajara", "Monterrey", "Cancún"],
      correcta: 0
    },
    {
      pregunta: "En quin país hi ha les piràmides de Gizeh?",
      opcions: ["Mèxic", "Egipte", "Perú", "Sudan"],
      correcta: 1
    },
    {
      pregunta: "Quina és la capital dels Estats Units?",
      opcions: ["Nova York", "Los Angeles", "Washington DC", "Chicago"],
      correcta: 2
    },
    {
      pregunta: "Quin és el país més petit del món?",
      opcions: ["Mònaco", "San Marino", "Liechtenstein", "Ciutat del Vaticà"],
      correcta: 3
    },
    {
      pregunta: "Quina és la capital de la comarca del Maresme?",
      opcions: ["Mataró", "Arenys de Mar", "Badalona", "Granollers"],
      correcta: 0
    },
    {
      pregunta: "Quina és la capital d'Andorra?",
      opcions: ["Escaldes-Engordany", "Andorra la Vella", "Sant Julià de Lòria", "La Massana"],
      correcta: 1
    },
    {
      pregunta: "Quin és el continent més fred?",
      opcions: ["Àsia", "Europa", "Antàrtida", "Oceania"],
      correcta: 2
    },
    {
      pregunta: "Quina és la capital de la Xina?",
      opcions: ["Xangai", "Hong Kong", "Canton", "Pequín"],
      correcta: 3
    },
    {
      pregunta: "Quin riu passa per Londres?",
      opcions: ["Tàmesi", "Sena", "Danubi", "Rin"],
      correcta: 0
    },
    {
      pregunta: "En quin país hi ha Machu Picchu?",
      opcions: ["Bolívia", "Perú", "Xile", "Equador"],
      correcta: 1
    },
    {
      pregunta: "Quina és la capital de Rússia?",
      opcions: ["Sant Petersburg", "Kíiv", "Moscou", "Minsk"],
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
    },
    {
      pregunta: "Quin Pokémon és el company de l'Ash?",
      opcions: ["Charmander", "Pikachu", "Bulbasaur", "Eevee"],
      correcta: 1
    },
    {
      pregunta: "En quin videojoc cal trobar l'impostor dins d'una nau espacial?",
      opcions: ["Among Us", "Fall Guys", "Brawl Stars", "Rocket League"],
      correcta: 0
    },
    {
      pregunta: "Com es diu el personatge groc que menja boletes en un laberint?",
      opcions: ["Kirby", "Wario", "Pac-Man", "Tails"],
      correcta: 2
    },
    {
      pregunta: "Quina empresa va crear la consola Xbox?",
      opcions: ["Sony", "Nintendo", "Valve", "Microsoft"],
      correcta: 3
    },
    {
      pregunta: "En quin joc es juga a futbol amb cotxes propulsats per coets?",
      opcions: ["Need for Speed", "Rocket League", "Gran Turismo", "Mario Kart"],
      correcta: 1
    },
    {
pregunta: "Com es diu el germà alt i vestit de verd de Super Mario?",
      opcions: ["Luigi", "Waluigi", "Yoshi", "Toad"],
      correcta: 0
    },
    {
      pregunta: "Quin joc consisteix a encaixar peces geomètriques que cauen des de dalt?",
      opcions: ["Candy Crush", "Minesweeper", "Tetris", "Pong"],
      correcta: 2
    },
    {
      pregunta: "Com es diu la princesa que Mario acostuma a rescatar?",
      opcions: ["Daisy", "Rosalina", "Zelda", "Peach"],
      correcta: 3
    },
    {
      pregunta: "En quin videojoc de supervivència 100 jugadors salten d'un autobús volador?",
      opcions: ["Apex Legends", "Fortnite", "Call of Duty: Warzone", "PUBG"],
      correcta: 1
    },
    {
      pregunta: "Quin estudi va desenvolupar Grand Theft Auto V?",
      opcions: ["Rockstar Games", "Ubisoft", "Electronic Arts", "Activision"],
      correcta: 0
    },
    {
      pregunta: "Com es diu el dinosaure verd que acompanya en Mario?",
      opcions: ["Bowser", "Koopa", "Yoshi", "Donkey Kong"],
      correcta: 2
    },
    {
      pregunta: "Quin és el nom del protagonista de la saga God of War?",
      opcions: ["Dante", "Geralt", "Arthur", "Kratos"],
      correcta: 3
    },
    {
      pregunta: "En quin joc de cartes gratuït s'enfronten herois de l'univers Warcraft?",
      opcions: ["Gwent", "Hearthstone", "Clash Royale", "Legends of Runeterra"],
      correcta: 1
    },
    {
      pregunta: "Quina consola híbrida de Nintendo es pot fer servir tant a la tele com en mode portàtil?",
      opcions: ["Nintendo Switch", "Nintendo Wii", "Nintendo 3DS", "GameCube"],
      correcta: 0
    },
    {
      pregunta: "Com es diu el caçador de monstres protagonista de The Witcher 3?",
      opcions: ["Ezio Auditore", "Altair", "Geralt de Rívia", "Commander Shepard"],
      correcta: 2
    },
    {
      pregunta: "Quin joc de mòbil consisteix a destruir torres amb cartes d'elixirs i tropes?",
      opcions: ["Brawl Stars", "Pokémon GO", "Subway Surfers", "Clash Royale"],
      correcta: 3
    },
    {
      pregunta: "Com es diu la intel·ligència artificial que guia el jugador a Portal?",
      opcions: ["Cortana", "GLaDOS", "SHODAN", "HAL 9000"],
      correcta: 1
    },
    {
      pregunta: "Quin és el rival principal de Super Mario?",
      opcions: ["Bowser", "Ganondorf", "Dr. Eggman", "Ridley"],
      correcta: 0
    },
    {
      pregunta: "En quin joc de simulació pots crear una família, construir cases i controlar la seva vida?",
      opcions: ["Animal Crossing", "Stardew Valley", "The Sims", "SimCity"],
      correcta: 2
    },
    {
      pregunta: "Quin mineral molt preuat serveix per fer les millors armadures clàssiques a Minecraft?",
      opcions: ["Ferro", "Or", "Carbó", "Diamant"],
      correcta: 3
    },
    {
      pregunta: "Com es diu el joc d'acció i tirs tàctic 5 contra 5 creat per Riot Games?",
      opcions: ["Counter-Strike", "Valorant", "Overwatch", "Rainbow Six Siege"],
      correcta: 1
    },
    {
      pregunta: "Quin animal és Donkey Kong?",
      opcions: ["Un goril·la", "Un ós", "Un cocodril", "Un rinoceront"],
      correcta: 0
    },
    {
      pregunta: "En quin joc has de gestionar una granja heretada del teu avi a Pelican Town?",
      opcions: ["Harvest Moon", "Terraria", "Stardew Valley", "Minecraft"],
      correcta: 2
    },
    {
      pregunta: "Com es diu l'enemic principal de Sonic?",
      opcions: ["Dr. Wily", "Dr. Neo Cortex", "Bowser Jr.", "Dr. Eggman"],
      correcta: 3
    },
    {
      pregunta: "Quina saga de videojocs de futbol d'EA Sports va canviar de nom a EA Sports FC?",
      opcions: ["PES", "FIFA", "Football Manager", "Inazuma Eleven"],
      correcta: 1
    },
    {
      pregunta: "Com es diu la protagonista de la saga Tomb Raider?",
      opcions: ["Lara Croft", "Jill Valentine", "Aloy", "Ellie"],
      correcta: 0
    },
    {
      pregunta: "En quin joc de lluita apareixen personatges com Ryu, Ken i Chun-Li?",
      opcions: ["Tekken", "Mortal Kombat", "Street Fighter", "Super Smash Bros"],
      correcta: 2
    },
    {
      pregunta: "Quin joc de món obert transcorre a l'Oest americà l'any 1899 amb Arthur Morgan?",
      opcions: ["Fallout: New Vegas", "Far Cry 5", "The Last of Us", "Red Dead Redemption 2"],
      correcta: 3
    },
    {
      pregunta: "Com es diu el personatge rosa de Nintendo que absorbeix els poders dels enemics?",
      opcions: ["Jigglypuff", "Kirby", "Yoshi", "Pikmin"],
      correcta: 1
    },
    {
      pregunta: "Quin joc MOBA de Riot Games es juga al mapa de l'Esquerda de l'Invocador?",
      opcions: ["League of Legends", "Dota 2", "Smite", "Heroes of the Storm"],
      correcta: 0
    },
    {
      pregunta: "En quin joc de Nintendo pots pagar una hipoteca al mapache Tom Nook?",
      opcions: ["Splatoon", "Pikmin", "Animal Crossing", "Luigi's Mansion"],
      correcta: 2
    },
    {
      pregunta: "Com es diu l'espasa llegendària que empunya en Link a The Legend of Zelda?",
      opcions: ["Excalibur", "Espasa del Destí", "Fulla Oculta", "Espasa Mestra"],
      correcta: 3
    },
    {
      pregunta: "Quina empresa japonesa va crear els jocs de Pokémon?",
      opcions: ["Capcom", "Game Freak", "Square Enix", "Bandai Namco"],
      correcta: 1
    },
    {
      pregunta: "En quin videojoc de tirs cal pintar el terra amb tinta del color del teu equip?",
      opcions: ["Splatoon", "Overwatch", "Team Fortress 2", "Halo"],
      correcta: 0
    },
    {
      pregunta: "Com es diu la plataforma digital de Valve més famosa per comprar jocs de PC?",
      opcions: ["Epic Games Store", "Origin", "Steam", "Battle.net"],
      correcta: 2
    }
  ]
};