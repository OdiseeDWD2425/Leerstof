function clickOnFunctionBtn(event){
	console.log('click via function');
	console.log(event.target);
}

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

	// events
	const functionBtn = document.getElementById('clickFunctionButton');
	const anonymousBtn = document.getElementById('clickAnonymousButton');
	const arrowBtn = document.getElementById('clickArrowButton');

	// with named function
	functionBtn.addEventListener('click', clickOnFunctionBtn); // default is bubble up behaviour

	// with anonymous function
	anonymousBtn.addEventListener('click', function(event){
		console.log('click via anonymous function');
		console.log(event.target);
		// dit is beter dan het vorige omdat de code die uitgevoerd wordt staat bij de event listener
	});

	// with arrow function -> hier geven we meestal de voorkeur aan
	arrowBtn.addEventListener('click', event => {
		console.log('click via arrow function');
		console.log(event.target);
		// dit is een kleine optimalisatie tov het vorige
	});

	// usecaputre
	const outerDiv = document.getElementById('outer-div');
	const innerDiv = document.getElementById('inner-div');
	const button = document.getElementById('button');

	outerDiv.addEventListener('click', ()=>{
		console.log('click outer-div');
	}), true;
	innerDiv.addEventListener('click', ()=>{
		console.log('click inner-div');
	}, true);
	button.addEventListener('click', ()=>{
		console.log('click button');
	}, true);

	// default gedrag is bubble: eerst button, dan inner, dan outer
	// met een extra parameter toe te voegen kan de volgorde veranderd worden
	// dit is echter vaak wat prutswerk om het heel correct te krijgen
	// gaan we dus ook vaak niet doen

	// remove event listener
	const clickBtn = document.getElementById('clickBtn');
	const addBtn = document.getElementById('addBtn');
	const delBtn = document.getElementById('removeBtn');

	addBtn.addEventListener('click', ()=>{
		clickBtn.addEventListener('click', clickOnFunctionBtn);
		console.log('listener added');
	});

	addBtn.addEventListener('click', () => {
		console.log('second event listener');
	});

	// variant met de arrow functie
	// kan niet verwijderd worden
	// bij meerdere keren toevoegen wordt de arrow-functie meerdere keren uitgevoerd
	// voor het systeem zijn dit verschillende functies
	/*addBtn.addEventListener('click', ()=>{
		clickBtn.addEventListener('click', ()=>{
			console.log('click via function');
			console.log(event.target);
		});
		console.log('listener added');
	});
    */

	delBtn.addEventListener('click', ()=> {
		clickBtn.removeEventListener('click', clickOnFunctionBtn);
		console.log('listener removed');
	});

	// Dom manipulatie inner html
	const btn = document.getElementById('knop');
	const par = document.getElementById('id');
	let teller = 0;

	btn.addEventListener('click', () => {
		console.log(par.innerHTML);
		teller ++;
		// string interpolation -> let op de schuine quote
		par.innerHTML = `Je hebt ${teller} keer op de knop  <button class="btn" id="addBtn">Add</button> geduwd`;
	});

	// Dom manipulatie classlist
	const p1 = document.getElementById('p1');
	const p2 = document.getElementById('p2');
	const btnAddCls = document.getElementById('btnAddCls');
	const btnRemCls = document.getElementById('btnRemCls');
	const btnContainsCls = document.getElementById('btnContainsCls');
	const btnToggleCls = document.getElementById('btnToggleCls');

	btnAddCls.addEventListener('click', ()=>{
		p1.classList.add('benadrukt');
	});
    
	btnRemCls.addEventListener('click', ()=>{
		p1.classList.remove('benadrukt');
	});
    
	btnContainsCls.addEventListener('click', ()=>{
		if(p1.classList.contains('benadrukt')){
			console.log('p1 heeft de css klasse benadrukt');
		} else{
			console.log('p1 heeft de css klasse benadrukt niet');
		}
	});

	btnToggleCls.addEventListener('click', ()=>{
		p2.classList.toggle('benadrukt');
		//bovenstaande lijn is gelijk aan
		if(p1.classList.contains('benadrukt')){
			p2.classList.remove('benadrukt');
		} else {
			p2.classList.add('benadrukt');
		}
	});

	// Dom manipulatie attributes
	const p3 = document.getElementById('p3');
	const p4 = document.getElementById('p4');
	const btnHasAtt = document.getElementById('btnHasAtt');
	const btnGetAtt = document.getElementById('btnGetAtt');
	const btnSetAtt = document.getElementById('btnSetAtt');
	const btnRemoveAtt = document.getElementById('btnRemoveAtt');

	btnHasAtt.addEventListener('click', ()=>{
		p4.innerText = p3.hasAttribute('data-nummer');
	});
    
	btnGetAtt.addEventListener('click', ()=>{
		p4.innerText = p3.getAttribute('data-nummer');
	});
    
	btnSetAtt.addEventListener('click', ()=>{
		p3.setAttribute('data-nummer', 24);
	});

	btnRemoveAtt.addEventListener('click', ()=>{
		p3.removeAttribute('data-nummer');
	});
})();


    