const body = document.querySelector('body')
const barListElements = document.querySelectorAll('.bar__list-item')
const initialDelay = 1500
const delayInterval = 250

// Set transition delays
Array.from(barListElements).map((listElement, index) => {
    const delayString = `${(initialDelay + (index + 1) * delayInterval).toString()}ms`
    listElement.style.transitionDelay = delayString
})

// Set `loaded` class to start animations
window.addEventListener('load', () => body.classList.add('loaded'))