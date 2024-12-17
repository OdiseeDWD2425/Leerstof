const restaurantClosed = false;

function executeTask(task, time){
	console.log(task);
	// maak de promise aan
	const promise = new Promise((resolve, reject)=>{
		// resolve -> actie goed afgerond
		// reject is foutmelding

		// hier wordt de promise manueel aangemaakt, ga je in de realiteit niet veel moeten doen

		if(restaurantClosed){
			reject('restaurant gesloten');
		} else {
			setTimeout(() => resolve(), time); // resolve de promise
		}
	});

	return promise;
}

// er zijn twee extra keywords
// async -> plaatsen we voor function om aan te geven dat de functie asynchroon is
// await -> dat geeft gaan dat er moet gewacht worden op de promise
async function orderPizza(size, saus, toppings){
	
	try{
		await executeTask('bestelling plaatsen', 2000); // hier wordt 2 sec gewacht voor er verder gegaan wordt met de volgende stap
		await executeTask(`Maak deeg voor ${size} pizza`, 2000);
		await executeTask(`Smeer ${saus} op de pizza`, 1000);
		await executeTask(`Beleg pizza met ${toppings.join(',')}`, 5000);
		await executeTask('Steek pizza in de oven', 10000);
		await executeTask('Kies doos', 2000);
		await executeTask('Lever bestelling', 1000);
        
		console.log('Geleverd');
	} catch(e){
		console.log(e);
	}
}

orderPizza('large', 'tomatensaus', ['spek', 'mozarella', 'ananas']);

console.log('bestelling geplaatst'); // dan gaat dit eerst uitgeprint worden want de order pizza functie is asynchroon
// dat houdt in dat van zodra er een await staat dat hij na de eerste await stopt met de functie en verder gaat met de rest van de code