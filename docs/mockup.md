# Mockup - Joc Quiz

El mockup està fet amb Figma: [Joc Quiz - Mockup](https://www.figma.com/design/dCIzYqw6S19VCHduVQUR9C)

![Mockup de les 4 pantalles](mockup.png)

## Pantalles

| Pantalla | Què hi ha |
|---|---|
| 1. Inici | Portada en dues columnes: a l'esquerra el títol "Joc Quiz", una frase i tres característiques (Tria el tema, Contra rellotge, Mira els resultats); a la dreta una targeta per escriure el nom i el botó **Començar** |
| 2. Tria de tema | "Hola, [nom]!" i quatre targetes amb una capçalera de color i icona per triar **Esports**, **Menjar**, **Geografia** o **Videojocs** |
| 3. Pregunta | Tema, número de pregunta amb una ratlleta per pregunta, temporitzador circular, la pregunta, 4 respostes (A, B, C, D) i el botó **Sortir als temes** |
| 4. Resultats | Anell amb el percentatge d'encerts i la puntuació (per exemple 4/5), resum de cada pregunta i botons **Tornar a jugar** i **Sortir** |

A totes les pantalles hi ha un peu de pàgina: "Fet per Biel Pérez i Anthony Milla · DAM 2026".

## Tipografia

Fem servir la font **Poppins** de Google Fonts, amb 4 pesos: Regular (400), Medium (500), SemiBold (600) i Bold (700).

| Estil | Pes | Mida | On es fa servir |
|---|---|---|---|
| Display | Bold | 52 px | "Hola, [nom]!" i la puntuació final |
| Títol 1 | Bold | 44 px | Nom del joc |
| Títol 2 | Bold | 36 px | Text de la pregunta i títol de resultats |
| Títol 3 | Bold | 30 px | Nom de cada tema |
| Info | SemiBold | 20 px | "Pregunta X de Y" |
| Subtítol | Regular | 20 px | Text sota els títols |
| Opció | Medium | 20 px | Text de les respostes |
| Botó | SemiBold | 18 px | Text dels botons |
| Cos | Regular | 16 px | Text normal i camp del nom |
| Etiqueta | SemiBold | 16 px | "Com et dius?" i etiquetes |
| Enllaç | Medium | 16 px | "Canviar de nom" (subratllat) |
| Petit | Medium | 14 px | Informació petita i resum de respostes |
| Mini | SemiBold | 13 px | "Correcta" / "Incorrecta" |

## Colors

Al CSS, els colors estan guardats com a variables a `:root` (fitxer `css/style.css`).

| Color | Codi | Variable CSS | On es fa servir |
|---|---|---|---|
| Lila fosc | `#4338CA` | `--lila-fosc` | Color principal, títols i inici del degradat |
| Lila | `#7C3AED` | `--lila` | Final del degradat del fons |
| Groc | `#FBBF24` | `--groc` | Botons principals i barra del temps |
| Text principal | `#1E1B4B` | `--text` | Text normal |
| Text secundari | `#6B7280` | `--gris` | Textos de suport |
| Blanc | `#FFFFFF` | - | Targetes i botons secundaris |
| Gris clar | `#F9FAFB` | `--gris-clar` | Fons del camp del nom |
| Lila clar | `#EEF2FF` | `--lila-clar` | Cercle de la lletra de les respostes |
| Verd | `#16A34A` | `--verd` | Tema Esports i respostes correctes |
| Vermell | `#DC2626` | `--vermell` | Errors i respostes incorrectes |
| Taronja | `#EA580C` | `--taronja` | Tema Menjar |

El fons és un **degradat** amb unes taques de color difuminades que es mouen a poc a poc i uns interrogants grans i transparents de decoració.

### Colors segons el tema

Quan es tria un tema, el fons i els detalls (etiqueta, lletres de les respostes, anell de resultats) canvien de color, i en tornar a la tria de tema es torna al lila:

| Tema | Degradat del fons | Color dels detalls |
|---|---|---|
| Inici i tria de tema | `#4338CA` → `#7C3AED` (lila) | `#4338CA` |
| Esports | `#065F46` → `#10B981` (verd) | `#059669` |
| Menjar | `#9A3412` → `#F59E0B` (taronja) | `#EA580C` |
| Geografia | `#1E3A8A` → `#0EA5E9` (blau) | `#0284C7` |
| Videojocs | `#831843` → `#EC4899` (rosa) | `#DB2777` |

Al CSS es fa amb les variables `--fons-1`, `--fons-2`, `--tema` i `--tema-clar`, que canvien amb les classes `tema-esports`, `tema-menjar`, `tema-geografia` i `tema-videojocs` del `body`.

## Components

- **Botó principal:** groc amb un degradat suau, text fosc i cantonades de 14 px. Per a l'acció important de cada pantalla (Començar, Jugar, Tornar a jugar).
- **Botó secundari:** blanc amb vora lila de 2 px. Per a les accions secundàries (Sortir).
- **Opció de resposta:** fons blanc, vora lila clar, cantonades de 16 px. Porta la lletra (A, B, C, D) dins d'un cercle.
- **Targeta:** fons blanc, cantonades de 28 px i una ombra suau. Conté el contingut de cada pantalla.
- **Temporitzador circular:** un cercle que es va buidant. És verd amb més de 9 segons, groc entre 9 i 6, i vermell els últims 5, quan també fa un petit batec.

## Animacions

- Les pantalles apareixen amb un fos i un petit desplaçament cap amunt.
- Els botons i les targetes dels temes s'aixequen en passar-hi el ratolí.
- Les respostes apareixen una darrere l'altra.
- Les respostes també es poden triar amb les tecles A, B, C i D.

## Formes i espais

- **Cantonades:** 14 px (botons i camps), 18 px (respostes), 28 px (targetes) i rodones del tot per a les etiquetes.
- **Espais:** fem servir múltiples de 8 (8, 16, 24, 32 i 48 px).

## Icones

Icones de [Lucide](https://lucide.dev) amb traç de 2 px: copa (Esports), coberts (Menjar), rellotge (temps), check (correcta) i creu (incorrecta).

## Flux entre pantalles

- **Inici → Tria de tema:** en clicar Començar, si el nom no és buit.
- **Tria de tema → Pregunta:** en clicar Jugar en un dels dos temes.
- **Pregunta → Pregunta:** quan es respon o s'acaba el temps, si queden preguntes.
- **Pregunta → Resultats:** després de l'última pregunta.
- **Resultats → Tria de tema:** amb Tornar a jugar.
- **Resultats → Inici:** amb Sortir.
- **Tria de tema → Inici:** amb Canviar de nom.
- **Pregunta → Tria de tema:** amb Sortir als temes (abans demana confirmació, perquè es perd la partida).

## Mida

El disseny està pensat per a ordinador (1280 × 800 px), amb el contingut centrat i una amplada màxima de 960 px. La versió per a mòbil i tauleta es farà al seguiment 2.
