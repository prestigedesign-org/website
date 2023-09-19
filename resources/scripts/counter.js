function startCounterAnimation() {
    const counterElements = document.querySelectorAll('.counter-number');
    counterElements.forEach((counterElement) => {
        const targetNumber = parseInt(counterElement.getAttribute('data-target-number'));
        let currentNumber = 0;
        const interval = setInterval(() => {
            if (currentNumber >= targetNumber) {
                clearInterval(interval);
            } else {
                currentNumber += 1; // Increase the counter by 1 (you can adjust the speed here)
                counterElement.querySelector('span:first-child').textContent = currentNumber;
            }
        }, 20); // Adjust the interval time (animation speed) as needed
    });
}

// Check if the counters are in the viewport and start the animation when they are visible
function handleScroll() {
    const counterContents = document.querySelector('.counter-contents');
    const rect = counterContents.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        startCounterAnimation();
        window.removeEventListener('scroll', handleScroll); // Remove the scroll listener once the counters are in the viewport
    }
}

// Add a scroll event listener to trigger the counting animation when the counters are in the viewport
window.addEventListener('scroll', handleScroll);
