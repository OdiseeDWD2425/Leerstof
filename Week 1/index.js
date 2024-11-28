// Schrijf een functie die de eerste n getallen optelt (n is een parameter)
function getallenOptellen(tot){
	let sum = 0;
	for (let i =0; i<tot; i++){
		sum += i;
	}
	return sum;
}
console.log(getallenOptellen(100));

// Schrijf een functie die een array van lengte n maakt met willekeurige getallen tussen a en b
function getRandomGetal(a, b){
	let getal = Math.random();  // getal tussen 0 en 1
	getal = getal * (b-a);      // getal tussen 0 en b-a
	getal = getal + a;          // getal tussen a en b
	return Math.floor(getal);
}

function maakArray(n, a, b){
	let array = [];

	for(let i=0; i<n; i++){
		array.push(getRandomGetal(a, b));
	}

	return array;
}
let arr = maakArray(10, 20, 200);
console.log(arr);


// Schrijf een functie die de getallen in een array verdubbelt als ze even zijn en halveert als ze oneven zijn
function doIt(array){
	for(let i=0; i<array.length; i++){
		if(array[i] % 2 == 0){
			array[i] /= 2;
		} else {
			array[i] *= 2;
		}
	}
	return array;
}
console.log(doIt(arr)); // pas op dat hier de originele array ook aangepast is, deze lijn geeft zelfde output als hieronder
console.log(arr);

function doIt2(array){
	let arr = [];
	for(let i=0; i<array.length; i++){
		if(array[i] % 2 == 0){
			arr.push(array[i] / 2);
		} else {
			arr.push(array[i] * 2);
		}
	}
	return arr;
}

console.log(doIt2(arr)); // pas op dat hier de originele array ook aangepast is, deze lijn geeft zelfde output als hieronder
console.log(arr);

let perselen = [
	{
		breedte: 10,
		lengte: 50
	},
	{
		breedte:30,
		lengte:20
	}
];

for(let p of perselen){
	p.oppervlakte = p.breedte * p.lengte;
}
for(let p of perselen){
	console.log(p);
}

// bereken de oppervlakte van bovenstaande perselen. Voeg deze oppervlakte toe aan elk object
/* gewenst resultaat:
let perselen = [
	{
		breedte: 10,
		lengte: 50,
        oppervlakte: 500
	},
	{
		breedte:30,
		lengte:20,
        oppervlakte: 600
	}
];
*/
