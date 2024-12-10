// onderstaande werkt het best
const loginForm = document.forms.loginForm;
// dit werkt ook
const inpUsername = document.getElementById('username'); // dit is minder leesbaar (eerste werkt gemakkelijker)

const ulErrors = document.getElementById('errors');

loginForm.addEventListener('submit', (event) => {
    // dit gaat gebeuren als het formulier gesubmit wordt via een submit knop
  //  event.preventDefault(); // er wordt automatisch niets verstuurd naar de server hierdoor
    event.stopPropagation(); // hiermee zorgen we ervoor dat het event niet doorgeven wordt naar het boven/onderliggende html

    console.log(loginForm.username.value);
    console.log(loginForm.passwoord.value);
    console.log(loginForm.email.value);

    // javascript validatie
    ulErrors.innerHTML = ''; // begin met een lege lijst
    //if(loginForm.passwoord.value.length < 5){ // als de string length 4 is dan gaat dit niet valid zijn 
    if(!loginForm.passwoord.validity.valid){
        //passwoord is invalid
        const li = document.createElement('li');
        li.innerText='password is incorrect';
        ulErrors.appendChild(li);
    }

    if(loginForm.email.validity.patternMismatch){
        console.log('email invalid');
        loginForm.email.setCustomValidity('Het email adres moet eindigen met @student.odisee.be')
        loginForm.email.reportValidity();
    } else{
        console.log('email valid');
    }
    
    // data kan nog altijd manueel verstuurd worden naar de server (technieken week 4)
});

loginForm.username.addEventListener('input', (event) => {
    if(event.target.value.length <= 2){
        event.target.setCustomValidity('tekst is te kort'); // stel de foutboodschap in
        event.target.reportValidity(); // toon de boodschap
    } else if(event.target.value.length >= 8){
        event.target.setCustomValidity('tekst is te lang'); // stel de foutboodschap in
        event.target.reportValidity(); // toon de boodschap
    } else {
        event.target.setCustomValidity(''); // verwijder de boodschap
        event.target.reportValidity(); // toon de boodschap
    }
})

loginForm.username.addEventListener('focus', (event) => {
    event.target.value = ''; // om veldjes leeg te maken bij er terug in te gaan
})

loginForm.age.addEventListener('blur', (event) => {
    if(event.target.value > 100){
        event.target.classList.add('invalid');
    } else {
        event.target.classList.remove('invalid');
    }
})