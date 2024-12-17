
function step1(){
	console.log('step1');
}
function step2(){
	console.log('step2');
}
function step3(){
	console.log('step3');
}
function step4(){
	console.log('step4');
}
function step5(){
	console.log('step5');
}

// synchroon werken
/*step1();
step2();
step3();
step4();
step5();*/

// setTimeout -> die zegt na hoeveel tijd de functie in de paraemter uitgevoerd wordt
setTimeout(step1, 2000); // stap1 na 2 sec
setTimeout(step2, 3000); // stap2 na 3 sec
setTimeout(step3, 1000);
setTimeout(step4, 2000);
setTimeout(step5, 1000);
console.log('done');

// je ziet dat er niet gewacht wordt met verdergaan tot de volgende lijn in elke tijdstap met asynchroon werken
// de timers lopen tegelijkertijd 

// om de pizza demo uit de slides te doen
// bij het maken van de pizza moet het er achter elkaar gebeuren
// dus de uitkomst van stap1 wordt aan stap2 doorgeven
// timer van de tweede stap wordt maar gestart na de eerste stap
function orderPizza(size, saus, toppings){
	console.log('bestelling plaatsen');
	setTimeout(() => {
		console.log(`Maak deeg voor ${size} pizza`);
		setTimeout(() => {
			console.log(`Smeer ${saus} op de pizza`);
			setTimeout(() => {
				console.log(`Beleg de pizza met ${toppings.join(',')}`);
				setTimeout(() => {
					console.log('Pizza in de oven');
					setTimeout(() => {
						console.log('kies doos');
						setTimeout(()=>{
							console.log('bestelling leveren');
							setTimeout(()=>{
								console.log('geleverd');
							}, 1000);
						}, 2000);
					}, 10000);
				}, 5000);
			}, 1000);
		}, 2000);
	}, 2000);
}
// niet de meest leesbare code -> moeilijk om te weten wat na elkaar wordt uitgevoerd

orderPizza('large', 'tomatensaus', ['spek', 'mozarella', 'ananas']);