document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    if (!userInput || !sendButton) {
        console.error('HTML-elementen met id="user-input" of id="send-button" niet gevonden.');
        return;
    }

    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim(); // Haal de ingevoerde tekst op en verwijder witruimte
        if (message !== '') {
            alert('Bericht verzonden: ' + message); // Simuleer het verzenden van het bericht
            userInput.value = ''; // Wis het invoerveld
        } else {
            alert('Het invoerveld is leeg. Typ een bericht voordat je verzendt.');
        }
    });
});