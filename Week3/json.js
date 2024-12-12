const person = {
	voornaam: 'Jens',
	achternaam: 'Baetens',
	hobbies: ['kjladf', 'jakhdlf', 'ahladfh'],
	vakken: [
		{
			naam:'Dynamic Web Development',
			studiepunten: 6
		}, 
		{
			naam: 'Programmertechnieken en testen',
			studiepunten: 8
		}
	]
};

const lijstMetProducten = [
	{
		id: 12453532,
		naam: 'Voetbal',
		prijs: 15.23,
		korting: 0.2,
		img: 'http://www.google.be'
	}, 
	{
		id: 12453533,
		naam: 'Tennisbal',
		prijs: 1.00,
		korting: 0.0,
		img: 'http://www.google.be'
	}
];

console.log(JSON.stringify(lijstMetProducten));

console.log(person);

const personString = JSON.stringify(person);
console.log(personString);

const personRemade = JSON.parse(personString);
console.log(personRemade);

localStorage.setItem('person', personString);
localStorage.person = personString; // maar dit is niet veel gebruikt en je kan ook niet alles gebruiken

const divProducten = document.getElementById('producten');
for(let p of lijstMetProducten){
	// methode 1 om producten toe te voegen aan de hmtl
	// compacter, iets leesbaarder maar eenvoudiger om fouten te maken
	// let op gebruik van ` ipv '
	divProducten.innerHTML += `
        <div class='product'>
            <p> ${p.naam} </p>
            <p> ${p.prijs}</p>
            <button productId="${p.id}">Koop</button>
        </div>
    `;

	// methode 2
	// minder rap fouten mee maar neemt meer lijnen code in, eenvoudiger om fouten te maken
	// hier kan je wel ook event handlers toevoegen indien nodig
	const ele = document.createElement('div');
	ele.classList.add('product');

	let para = document.createElement('p');
	para.innerText = p.naam;
	ele.appendChild(para);
    
	para = document.createElement('p');
	para.innerText = p.prijs;
	ele.appendChild(para);
    
	let btn = document.createElement('button');
	btn.innerText = 'Koop';
	btn.setAttribute('productId', p.id);
	ele.appendChild(btn);

	divProducten.appendChild(ele);
}

divProducten.addEventListener('click', (event) => {
	if(!event.target.hasAttribute('productId')){
		console.log('geen correcte knop');
		return;
	}
	console.log(event.target);
});

const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b]; // dit is hetzelfde als (a[0], a[1], b[0], b[1])
console.log(merged);

function som(...getallen){
	console.log(getallen);
	let totaal = 0;
	for(let i of getallen){
		totaal += i;
	}
	console.log(totaal);
	return totaal;
}

som(3,4,5); // door de ... worden de drie parameters samengevoegd tot 3,4,5