async function loadPokemon(){
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30');
	// we vragen de pokemons op dus get -> geen extra opties nodig

	if(response.ok){
		const json = await response.json();
		console.log(json);
		return json;
	} else {
		console.log(response);
	}
}

loadPokemon();