const receptenContainer = document.getElementById('recepten-container');
const texts = Array.from(receptenContainer.querySelectorAll('div')).map(div => div.innerHTML);

let currentIndex = 0;

const textDisplay = document.getElementById('text-display');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const indicatorContainer = document.querySelector('.indicator-container');

texts.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (index === currentIndex) {
        indicator.classList.add('active');
    }
    indicatorContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function updateTextDisplay() {
    textDisplay.innerHTML = texts[currentIndex];
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateTextDisplay();
        updateIndicators();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < texts.length - 1) {
        currentIndex++;
        updateTextDisplay();
        updateIndicators();
    }
});

updateTextDisplay();
updateIndicators();
