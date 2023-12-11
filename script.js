const text = "  Javascript er vanskelig  ";

/*
Bruk string methods på text til å:


Bytte ut ordet 'vanskelig' med ordet 'gøy'.


Gjør hele setningen om til store bokstaver.


Fjern mellomrom på begynnelsen og slutten av setningen.
*/
trimmedText = text.trim();
console.log(trimmedText.toUpperCase());

const number = 56123.321313;

/*
Vi har ikke snakket om det, men prøv å bruke google for å finne frem til løsningen


Bruk number methods til å:


Begrense antall siffer etter desimalpunktet til 2


Konvertere tallet til en string
*/
var fixedText = number.toFixed(2);
var str = fixedText.toString();
console.log(str);

const marvelHeroes = [
    "Spider-Man",
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Iron Man",
];

/*
Bruk array methods til å:


Legge til en ny marvel helt på slutten av arrayet


Fjerne den første helten i arrayet (Spider-Man)


Bytt ut 'Doctor Strange' med 'Thanatos'


Slå sammen arrayet til en string med et utropstegn (!) mellom hver helt.
*/
marvelHeroes.push("another Marvel character");
marvelHeroes.shift();
marvelHeroes.fill("Thanatos", 2, 3);
let joinedHeros = marvelHeroes.join("!");
console.log(joinedHeros);
