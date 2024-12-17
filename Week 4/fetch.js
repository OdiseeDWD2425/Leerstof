/*fetch('https://api.restful-api.dev/objects').then((response) =>{
	if(response.ok){
		// status code is 200
		return response.json(); // zet de reponse om naar een json
	}
}).then((json) => {
	console.log(json);
});*/

async function getAll(){
	const response = await fetch('https://api.restful-api.dev/objects');

	if(response.ok){
		const json = await response.json();
		console.log(json);
		return json;
	}
}

async function get(id){
	const response = await fetch('https://api.restful-api.dev/objects/' + id);

	if(response.ok){
		const json = await response.json();
		console.log(json);
		return json;
	}
}

async function add(item){

	// voor andere fetch-methoden moeten we options toevoegen
	// wordt ook gebruikt voor api-keys/authenticatie/post
	const response = await fetch('https://api.restful-api.dev/objects', {
		method: 'POST', // method type (GET(Default), POST, PUT, DELETE, PATCH)

		body: JSON.stringify(item), // wat is de data voor de server

		headers: {
			'Content-type': 'application/json', //wat is het formaat van de data in de body
		}
	});

	if(response.ok){
		const json = await response.json();
		console.log(json.id);
		return json.id;
	}
}

async function test(){
	// get all
	console.log(await getAll());

	// add item
	const id = await add({
		name:'blabla iphone',
		data: {
			year: 2020,
			ram: 16
		}
	});

	// retrieve the item with the returned id
	console.log(await get(id));
}

test();


/*
 HTML (client)

fetch -> stuur een berichtje naar een url (endpoint) met eventueel informatie in

API (reeks endpoints voor een database/applicatie) (server)

die ontvangt het berichtje van de fetch en doet indien nodig een sql-query op de database
het resultaat van de query wordt gereturned naar de fetch als response

DATABASE (server)

voert de query uit en geeft het resultaat aan de api

*/