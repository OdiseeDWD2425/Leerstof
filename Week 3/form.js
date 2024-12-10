// onderstaande werkt het best
const loginForm = document.forms.loginForm;
// dit werkt ook
const inpUsername = document.getElementById('username'); // dit is minder leesbaar (eerste werkt gemakkelijker)

loginForm.addEventListener('submit', (event) => {
    // dit gaat gebeuren als het formulier gesubmit wordt via een submit knop
    event.preventDefault(); // er wordt automatisch niets verstuurd naar de server hierdoor
    event.stopPropagation(); // hiermee zorgen we ervoor dat het event niet doorgeven wordt naar het boven/onderliggende html

    console.log(loginForm.username.value);
    console.log(loginForm.passwoord.value);

    // data kan nog altijd manueel verstuurd worden naar de server (technieken week 4)
});
