//Deel 1
let klas = []; // Bolletje 1
let lettergrepen = ['uq','uw','ur','ut','up','us','ud','uf','ug','uh','uk',
	'ul','uz','uv', 'ub','un','um','iq','iw','ir','it','ip','is','id','if','ig'
];

function getLettergreep(){
	// ga op zoek naar een random lettergreep in de lettergrepen array
	let idx = Math.floor(Math.random() * lettergrepen.length);
	return lettergrepen[idx];
}

function maakNaam(){
	let voornaam = getLettergreep() + getLettergreep();
	let achternaam = getLettergreep() + getLettergreep() + getLettergreep();
	return voornaam + ' ' + achternaam;
}

function maakStudent(n){
	let nummer = 'NR-';
	if (n<10){
		nummer += '0' + n;
	} else {
		nummer += n;
	}

	let naam = maakNaam();
	return {
		naam: naam,
		nummer: nummer
	};
}

for(let i=0; i<22; i++){
	klas.push(maakStudent(i));
}

for(let student of klas){
	console.log(student);
}

// Deel 2
function maakKlas(aantal){
	let klas = Object();
	klas.studenten = [];

	for(let i=0; i<aantal; i++){
		klas.studenten.push(maakStudent(i));
	}

	return klas;
}

let klasAvond = maakKlas(10);
let klasDag = maakKlas(20);

console.log(klasAvond);
console.log(klasDag);

// Deel 3
function maakKlasMetMoment(aantal, moment){
	let klas = Object();
	klas.studenten = [];

	for(let i=0; i<aantal; i++){
		let student = maakStudent(i);
		student.moment = moment;
		klas.studenten.push(student);
	}

	return klas;
}

klasAvond = maakKlasMetMoment(10, 'avond');
klasDag = maakKlasMetMoment(20, 'dag');

function toonStudent(klas, nummer){
	for(let student of klas.studenten){
		if(student.nummer === nummer){
			return student;
		}
	}
	return null;
}

console.log(toonStudent(klasAvond, 'NR-09'));

function kiesStudent(klas){
	let n = Math.floor(Math.random() * klas.studenten.length);

	let nummer = 'NR-';
	if (n<10){
		nummer += '0' + n;
	} else {
		nummer += n;
	}

	return nummer;
}

console.log(kiesStudent(klasDag));

function toonWillekeurigeStudent(klas){
	console.log(toonStudent(klas, kiesStudent(klas)));
}

toonWillekeurigeStudent(klasAvond);