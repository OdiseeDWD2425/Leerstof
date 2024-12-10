# Basis HTML-form validatie

1. **Maak een eenvoudig formulier** waarin de gebruiker zijn naam, e-mailadres en geboortedatum kan invoeren. Zorg ervoor dat alle velden verplicht zijn en valideer het e-mailadres met een HTML-attribuut.

2. **Voeg een select-lijst** toe waarin de gebruiker een favoriet hobby kan kiezen. Zorg dat de gebruiker verplicht een keuze maakt.

3. **Maak een formulier** dat alleen getallen tussen 1 en 100 accepteert voor een veld. Gebruik HTML-validatie-attributen zoals `min` en `max`.

# Eenvoudige JavaScript-validatie

4. **Valideer met JavaScript** dat een wachtwoordveld minimaal 8 karakters bevat wanneer de gebruiker het formulier probeert in te sturen.

5. **Gebruik een custom validatiebericht** via `setCustomValidity` wanneer een e-mailadres niet correct is ingevoerd.

6. **Maak een evenementlistener** die een foutmelding toont als een veld de focus verliest (`blur`) zonder geldig te zijn.

# Events en geavanceerdere validatie

7. **Luister naar het `input`-event** en toon direct een foutmelding onder een tekstveld als de ingevoerde waarde niet aan een regex-patroon voldoet (bijv. alleen letters).

8. **Gebruik `preventDefault`** om te voorkomen dat het formulier wordt verzonden als niet aan alle validatieregels is voldaan.

9. **Maak een formulier met meerdere stappen** waarbij de eerste stap de naam en het e-mailadres verzamelt en pas doorgaat naar de volgende stap als deze velden geldig zijn.

# RegEx en geavanceerde functionaliteit

10. **Schrijf een JavaScript-regel** met regex die controleert of een telefoonnummer exact 10 cijfers bevat en valideer dit bij het indienen van het formulier.

11. **Valideer een wachtwoordveld** op complexiteit (minimaal één hoofdletter, één cijfer en één speciaal teken) met regex.

12. **Voeg een real-time validatie toe** met behulp van het `input`-event voor een creditcardnummer.

# Dynamische formulieren en data-manipulatie

13. **Voeg een extra veld toe** aan een formulier met JavaScript wanneer een gebruiker een bepaald vakje aanvinkt (bijv. "Ik wil een ander adres opgeven").

14. **Lees formulierdata uit** met JavaScript en toon een samenvatting van alle ingevulde gegevens in een modaal voordat het formulier wordt ingediend.

15. **Gebruik de URLSearchParams-klasse** om gegevens van een verzonden formulier dat met een GET-verzoek is verzonden, te lezen en weer te geven in een tabel.