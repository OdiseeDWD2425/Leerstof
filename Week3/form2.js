const loc = window.location; // dit is informatie over je url/server
const search = window.location.search; //alles op het einde achter je url ?....
console.log(search);

const params = new URLSearchParams(search); // zet de tekst om in een dictionary
console.log(params);

console.log(params.get('passwoord'));