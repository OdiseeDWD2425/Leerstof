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
console.log(tmp + 1);
tmp = '31';
console.log(tmp + 1);

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

// Arrays (met rechte haakjes)
const animals = ['Dog', 'Cat', 'Fish'];

animals[2] = 'Goudvis';
animals[50] = 'Alpaca'; // kan niet in csharp
animals[10] = 1010.10; // er kunnen meerdere types in 1 array zitten

console.log(animals[50]); // undefined als het buiten de range valt

animals.push('Geit'); // voegt het element achteraan toe
console.log(animals.pop()); // omgekeerde van push
animals.unshift('Kikker'); // zelfde als push maar vanvoor
console.log(animals.shift()); // omgekeerde van unshift

console.log(animals);

// Controlestructuren
// if-else
const age = 20;

if (age <= 18) {
	console.log('doe dit');
} else if (age >= 65) {
	console.log('doe dat');
} else {
	console.log('doe niets');
}

// switch
switch (age) {
case 20:
	console.log('doe dit');
	break; // waarom is dit belangrijk? anders gaat javascript verder met de code in de volgende case!
case 65:
	console.log('doe dat');
	break;
default:
	console.log('doe niets');
}

// for-lus
for (let i = 0; i < 10; i++) {
	console.log(i);
}
for (let animal in animals) {
	console.log(animal); // dit print de indices/de properties van een object/ de keys van een dictionary uit
	console.log(animals[animal]);
}

for (let animal of animals) { // met of in de for print je de values uit, met in de keys/indices
	console.log(animal);
}
animals.forEach((value, index) => { // dit is een lambda expressie (een functie die opgeroepen wordt voor elke functie in de array)
	console.log(value);
	console.log(index);
});

// while
let counter = 20;
while(counter < 10){
	counter ++;
	console.log(counter);
}

// do-while = analoog aan de while maar de lus wordt minstens 1 keer uitgevoerd
do {
	counter ++;
	console.log(counter);
} while(counter < 10);

//functions
function printHelloWorld(){
	console.log('hello world!');
}
printHelloWorld();

function helloworld(name){
	return 'hello ' + name;
}
console.log(helloworld('Jens'));

// self invoking function -> de meest strikte manier om een main te maken
(function(){
	// hier willen we in principe alles in coderen
	// zodat de file op zichzelf staat
	// we maken een naamloze functie hiervoor

	// dit is belangrijk voor de scope van variabelen
	let x = 10;

})(); // met de laatste twee haakjes wordt deze naamloze functies onmiddelijk uitgevoerd

let x = 20;

