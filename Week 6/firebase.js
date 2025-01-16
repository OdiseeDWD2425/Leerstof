const firebaseConfig = {
	apiKey: 'AIzaSyDQBZtyHe44qQN9icFhZaMNZu_FWLM9IGI',
	authDomain: 'dynamic-web-development-8ff45.firebaseapp.com',
	projectId: 'dynamic-web-development-8ff45',
	storageBucket: 'dynamic-web-development-8ff45.firebasestorage.app',
	messagingSenderId: '463227987186',
	appId: '1:463227987186:web:9fbe2280cad425d9c71c6b'
}; // de firebase config -> vind je onder de project-settings -> general -> beetje naar beneden scrollen -> your apps
// als daar niets staat, maak een web-app aan

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore(); // db is een referentie naar de database

db.collection('Demo les')   // zoek de collectie in onze database
.get()                      // geef me alle documenten
.then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data()); // alle data uitprinten
	});
});

// te volgen stappenplan
// stap 1: https://firebase.google.com/
// stap 2: log in met een google account
// stap 3: ga naar de console (https://console.firebase.google.com/u/0/)
// stap 4: maak een project aan (vink google analytics uit)
// stap 5: onder build -> voeg een firestore toe
// stap 6: voeg hier wat data aan toe (maak een collectie (=tabel aan), voeg een aantal documenten (=rijen) toe, voeg wat fields/data/kolommen toe aan elk document)
// stap 7: onder de rules van de firestore plaats de volgende tekst (geen authenticate/login nodig)
/*
rules_version = '2';
 
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
*/
// stap 8: ga naar project settings (via tandwieletje linksbovenaan)
// stap 9: scroll naar beneden tot your apps en maak een web-app aan
// stap 10: kopieer de informatie onder de firebaseConfig

/* Uitlezen van data */
async function getAllDocuments(db, collection){
	const result = await db.collection(collection).get();  // geef me alle documenten

	console.log('getAllDocuments');
	result.forEach(doc => {
		console.log(doc);
		const data = doc.data(); // zet het firestore object om naar een json object (gemakkelijker te gebruiken)
		console.log(data); 
		console.log(`${data.Label} ---> ${data.Tekst}`); // print het Label en Tekst van elk document uit
	});
	console.log('------------------');
}

async function getDocument(db, collection, key){
	let result = await db.collection(collection).doc(key).get();  // geef me alle fields van het document met id=key

	console.log('getDocument');
	result = result.data(); // haal de data uit het resultaat
	console.log(`${result.Label} ---> ${result.Tekst}`); // print het Label en Tekst van dit document uit
	console.log('------------------');
}

async function searchForLabel(db, collection, label){
	const result = await db.collection(collection).where('Label', '==', label).get();  // geef me alle documenten

	console.log('search for label ' + label);
	result.forEach(doc => {
		const data = doc.data();
		console.log(`${data.Label} ---> ${data.Tekst}`); // print het Label en Tekst van elk document uit
	});
	console.log('------------------');
}

// data aanmaken in de firestore
async function addDocument(db, collection, id, data_label, data_tekst){
	if(id){
		// als het id vastgelegd wordt (manueel), dan moet eerst het document geselecteerd wordt
		await db.collection(collection).doc(id).set({
			Label: data_label,	// Label -> kolomnaam (data_label is de waarde van de kolomnaam)
			Tekst: data_tekst
		});
		console.log('add ok');
	} else {
		// als het id niet ingesteld wordt -> auto generated wordt gebruikt
		await db.collection(collection).add({
			Label: data_label,	// Label -> kolomnaam (data_label is de waarde van de kolomnaam)
			Tekst: data_tekst
		});
		console.log('add ok');
	}
}

async function addDocumentWithJson(db, collection, id, data){
	if(id){
		// als het id vastgelegd wordt (manueel), dan moet eerst het document geselecteerd wordt
		await db.collection(collection).doc(id).set(data); // data is een json die alle fields van het object bevat
		console.log('add ok');
	} else {
		// als het id niet ingesteld wordt -> auto generated wordt gebruikt
		await db.collection(collection).add(data);
		console.log('add ok');
	}
}

// update documents
async function updateDocument(db, collection, id, newData){
	console.log(`update Document ${id}: ${newData}`);
	// get document (om te controleren of het aangepast is)
	const resultOriginal = await db.collection(collection).doc(id).get();
	const dataOriginal = resultOriginal.data();
	console.log(`origineel: ${dataOriginal.Label} ---> ${dataOriginal.Tekst}`);

	// update document
	await db.collection(collection).doc(id).update(newData);

	// get document again (om te controleren of het aangepast is)
	const resultNew = await db.collection(collection).doc(id).get();
	const dataNew = resultNew.data();
	console.log(`nieuw: ${dataNew.Label} ---> ${dataNew.Tekst}`);
	console.log('---------------------');
}

// delete documents
async function deleteDocument(db, collection, keepTheseLabels){
	// welke documenten hebben een label dat niet in keepTheseLabels zit
	const docsToRemove = await db.collection(collection).where('Label', 'not-in', keepTheseLabels).get();

	const deletePromises = [];

	docsToRemove.forEach(doc => {
		console.log(doc.id);
		deletePromises.push(db.collection(collection).doc(doc.id).delete());
	});

	await Promise.all(deletePromises); // wacht tot alle deletes voltooid zijn
	console.log('Documents succesfully deleted');

}

async function demo(){
	// getAllDocuments
	await getAllDocuments(db, 'Demo les');

	// getSpecificDocument met id Les
	await getDocument(db, 'Demo les', 'Les');

	// get operaties (lees operatie) where (zoeken waar label == 'aaaa')
	await searchForLabel(db, 'Demo les', 'aaaa');

	// create / add -> zonder id / automatisch id (meestal wordt deze methode gebruikt)
	await addDocument(db, 'Demo les', undefined, 'blabla', 'qwerty');

	// create met specifiek id
	await addDocumentWithJson(db, 'Demo les', 'Jens', {
		naam: 'Jens Baetens',
		rol: 'Docent',
		vakken: ['DWD', 'PTT', 'ML']
	});

	// update operatie (data aan te passen)
	await updateDocument(db, 'Demo les', 'Les', {Tekst: 'Hello World!'});
	// we willen dat deze functie het Tekst-veld in het document met id Les aanpast naar Hello World!

	// delete -> documenten te gaan verwijderen
	deleteDocument(db, 'Demo les', ['aaaa', 'Test label']);
}

demo();