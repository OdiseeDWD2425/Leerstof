// in csharp -> eerst een main nodig
// niet nodig in javascript (alles wordt van boven naar beneden uitgevoerd (dit is onze main))

// const
// variabelen die niet veranderd kunnen worden
const ageConst = 31; // aanmaken van een variabele
console.log(ageConst); // Console.writeline(ageConst)
//ageConst = 32;
//console.log(ageConst);

// let
// variabelen te maken die veranderd kunnen worden
let ageLet = 31; // Let op er is geen type nodig bij het aanmaken van een variabele
console.log(ageLet);
ageLet = 'dit is 32'; // doordat er geen type is, kan een getal ook veranderd worden door een tekst/string
console.log(ageLet);

// var
// oudere manier voor veranderlijke variabelen 
// aangeraden om niet te gebruiken
var ageVar = 31; // var kan ook variabelen van andere bestanden gaan overschrijven -> kan leiden tot onverwachte situati
console.log(ageVar);
ageVar = 32;
console.log(ageVar);

// Datatypes zijn er wel
// String, Number, Object, Date, ...
const zin = 'ik ben een zin';
const leeftijd = 32;
const geslaagd = true; // of false;
const namen = ['Jens', 'Baetens']; // arrays
const geboortedatums = new Date();
const leegObject = undefined; // nog niet gedefinieerd
const nullObject = null; // redelijk analoog aan undefined;

// let op met getallen als tekst voor te stellen -> javascript kan het concateneren ipv optellen
let tmp = 31;
console.log(tmp+1);
tmp = '31';
console.log(tmp+1);

// wiskundige operaties gelijkaardig aan csharp
tmp + 31;
tmp - 5;
tmp * 10;
tmp % 2; // is het even of oneven
tmp++;

// Objecten -> is een datatype, dit is zoals een dictionary -> array van key-value paren
// aangemaakt door de accolades
const person = {
	firstname: 'Jens',
	lastname: 'Baetens'
};

person.firstname = 'ik ben aangepast'; // hier ben ik person aan het aanpassen maar person is een const -> dit gaat want we passen het object intern aan
person.geboortedatum = new Date();

// Dit gaat niet want dit past het object zelf aan
// person = new Object();

console.log(person);

/*
person -> plaats 0x10321901 in het geheugen
                -> daarin heb je 
                    -> firstname
                    -> lastname
const wil zeggen dat 0x10321901 constant moet blijven
*/