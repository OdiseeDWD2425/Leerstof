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