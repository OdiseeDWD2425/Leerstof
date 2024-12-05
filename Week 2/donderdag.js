//DOM Manipulation 5
const output = document.querySelector('#output');
const prullenbak = document.querySelector('#prullenbak');
const btnAppend = document.querySelector('#knop-append');
const btnPrepend = document.querySelector('#knop-prepend');

const verwijderdeElementen = [] ;
let teller = 0;

// voeg event listeners toe voor de append en prepend knoppen om een paragraaf toe te voegen 
// voeg daarna event listener(s) toe om het mogelijk te maken om een paragraaf te verwijderen door erop te klikken

btnAppend.addEventListener('click', ()=>{
	const ele = document.createElement('p');
	ele.innerText= `Dit is de ${teller}e paragraaf`;
	teller++;

	output.append(ele);
});

btnPrepend.addEventListener('click', ()=>{
	/*const ele = document.createElement('p');
	ele.innerText= `Dit is de ${teller}e paragraaf`;
	teller++;

	output.prepend(ele);*/

	output.innerHTML = `<p>Dit is de ${teller}e paragraaf </p>` + output.innerHTML;
	// alternatieve methode: vaak iets minder verboos, letterlijk html wel, minder codestijl
	// nadeel: je kan geen event listeners hieraan hangen (je moet eerst het element opvragen met queryselector of getelementbyid)
	teller ++;
});

output.addEventListener('click', (event) => {
	console.log(event.target);
	if(output == event.target){
		// doe niks als je op de div duwt (tussen paragrafen)
		console.log('doe niets');
		return;
	}

	output.removeChild(event.target);
});