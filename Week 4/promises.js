const restaurantClosed = true;

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

function orderPizza(size, saus, toppings){
	executeTask('bestelling plaatsen', 2000)
		.then(() => {
			return executeTask(`Maak deeg voor ${size} pizza`, 2000);
		}).then(() =>{
			return executeTask(`Smeer ${saus} op de pizza`, 1000);
		}).then(() =>{
			return executeTask(`Beleg pizza met ${toppings.join(',')}`, 5000);
		}).then(() =>{
			return executeTask('Steek pizza in de oven', 10000);
		}).then(() =>{
			return executeTask('Kies doos', 2000);
		}).then(() =>{
			return executeTask('Lever bestelling', 1000);
		}).then(() =>{
			console.log('Geleverd');
		}).catch(() => {
			console.log('restaurant gesloten');
		});
}

orderPizza('large', 'tomatensaus', ['spek', 'mozarella', 'ananas']);