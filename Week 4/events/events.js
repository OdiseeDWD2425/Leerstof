const productenTabel = document.getElementById('producten');
const geselecteerd = document.getElementById('geselecteerd');
const totaalPrijs = document.getElementById('totaalPrijs');

const winkelkar={};

// de data die hieronder staat komt in de realiteit van een API-call
const data = [{'PR_ID':112,'PR_CT_ID':1,'PR_naam':'Appel','PR_prijs':10},
	{'PR_ID':113,'PR_CT_ID':2,'PR_naam':'Granaatappel','PR_prijs':20},
	{'PR_ID':114,'PR_CT_ID':2,'PR_naam':'Boemkool','PR_prijs':15},
	{'PR_ID':133,'PR_CT_ID':1,'PR_naam':'Banaanaanwagen','PR_prijs':10},
	{'PR_ID':132,'PR_CT_ID':1,'PR_naam':'Framboos','PR_prijs':3},
	{'PR_ID':131,'PR_CT_ID':2,'PR_naam':'Andrijvie','PR_prijs':1.5},
	{'PR_ID':123,'PR_CT_ID':1,'PR_naam':'Bananasplit','PR_prijs':5},
	{'PR_ID':122,'PR_CT_ID':1,'PR_naam':'Hanananas','PR_prijs':5},
	{'PR_ID':121,'PR_CT_ID':1,'PR_naam':'Zuurpruim','PR_prijs':100},
	{'PR_ID':124,'PR_CT_ID':2,'PR_naam':'Ui','PR_prijs':2},
	{'PR_ID':130,'PR_CT_ID':1,'PR_naam':'Skiwi','PR_prijs':2},
	{'PR_ID':126,'PR_CT_ID':1,'PR_naam':'Spruitjes','PR_prijs':5},
	{'PR_ID':127,'PR_CT_ID':1,'PR_naam':'GestoofdePeren','PR_prijs':5},
	{'PR_ID':128,'PR_CT_ID':1,'PR_naam':'Gebakken peren','PR_prijs':10},
	{'PR_ID':135,'PR_CT_ID':2,'PR_naam':'Spinazie','PR_prijs':1.23},
	{'PR_ID':136,'PR_CT_ID':2,'PR_naam':'Spruiten','PR_prijs':3},
	{'PR_ID':137,'PR_CT_ID':2,'PR_naam':'Schorseneren','PR_prijs':5},
	{'PR_ID':145,'PR_CT_ID':1,'PR_naam':'Pampelmous','PR_prijs':2}];

// toon de producten in data in de tabel
function toonGegevens(){
	if(data === null || data === undefined || data.length === 0){
		return; // doe niets als er geen producten zijn
	}

	let tmpString = '';

	for(let product of data){
		tmpString += 
        `<tr>
            <td>${product.PR_naam}</td>
            <td>${product.PR_prijs}</td>
            <td id='data-aantal-${product.PR_ID}'>0</td>
            <td>
                <a class='btn text icon-left' data-id='${product.PR_ID}' data-action='add'>Add</a>
                <a class='btn text icon-left' data-id='${product.PR_ID}' data-action='remove'>Remove</a>
            </td>
        </tr>`;
	}

	productenTabel.innerHTML = tmpString;
}

toonGegevens();


function updateWinkelkar(){
	let aantalProducten = 0;
	let prijs = 0;

	for(const id in winkelkar){
		aantalProducten += winkelkar[id];

		for(let product of data){
			if(product.PR_ID == id){
				prijs += winkelkar[id] * product.PR_prijs;
			}
		}
	}

	geselecteerd.innerText = aantalProducten;
	totaalPrijs.innerText = prijs;
}

function addProduct(productId){

	if(!winkelkar[productId]){
		//item nog niet in de winkelkar
		winkelkar[productId]=0;
	}
	winkelkar[productId]++;

	productenTabel.querySelector('#data-aantal-' + productId).innerText = winkelkar[productId];

	updateWinkelkar();
}

function removeProduct(productId){

	if(!winkelkar[productId] || winkelkar[productId] === 0){
		//item (nog) niet in de winkelkar, kan je ook niet gaan verwijderen
		return;
	}

	winkelkar[productId]--;

	productenTabel.querySelector('#data-aantal-' + productId).innerText = winkelkar[productId];

	updateWinkelkar();
}

productenTabel.addEventListener('click', (e) =>{
	const action = e.target.getAttribute('data-action');
	const productId = e.target.getAttribute('data-id');

	if(!action){
		// als er geen action attribuut is, dan is het niet iets waar we op kunnen klikken, dus negeer het event
		return;
	}

	if(action === 'add'){
		addProduct(productId);
	} else if(action ==='remove'){
		removeProduct(productId);
	}
});

