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



// Schrijf een functie die de getallen in een array verdubbelt als ze even zijn en halveert als ze oneven zijn



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
