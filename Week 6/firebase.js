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