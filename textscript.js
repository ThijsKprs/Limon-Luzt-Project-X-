document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    if (!userInput || !sendButton) {
        console.error('HTML-elementen met id="user-input" of id="send-button" niet gevonden.');
        return;
    }

    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message !== '') {
            alert('Bericht verzonden: ' + message);
            userInput.value = '';
        } else {
            alert('Het invoerveld is leeg. Typ een bericht voordat je verzendt.');
        }
    });
});

/* bestellen js */

document.addEventListener('DOMContentLoaded', () => {

    const quantityInput = document.getElementById('quantity-input');

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityInput = document.getElementById('quantity-input');
    const priceDisplay = document.getElementById('price-display');

    const pricePerUnit = 14.99;

    function updatePrice() {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = (quantity * pricePerUnit).toFixed(2);
        priceDisplay.textContent = `€${totalPrice}`;
    }

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updatePrice();
        }
    });

    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        updatePrice();
    });

    quantityInput.addEventListener('input', () => {
        let currentValue = parseInt(quantityInput.value);
        if (isNaN(currentValue) || currentValue < 1) {
            quantityInput.value = 1;
        }
        updatePrice();
    });

    updatePrice();
});