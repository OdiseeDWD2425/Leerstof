(function(){
	// Get Element By ID
	const inputLeeftijd = document.getElementById('leeftijd');
	console.log(inputLeeftijd.value);

	const pTag = document.getElementById('ptag');
	console.log(pTag.innerText); // lees uit wat er tussen de tags staat
	pTag.innerText = 'test'; // pas de innerText aan

	// Query selector
	const el1 = document.querySelector('ul li');
	console.log(el1.innerText);

	const el2 = document.querySelector('ul li.test');
	console.log(el2.innerText);

	const el3 = document.querySelector('ul li:last-child');
	console.log(el3.innerText);

	console.log(document.querySelector('#leeftijd').value);
	console.log(document.querySelector('.test').innerText);

	// Query selector all
	const els = document.querySelectorAll('p');
	for(let ele of els){
		console.log(ele.innerText);
	}

})();
    