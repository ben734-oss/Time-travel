// Clock functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    // Easter egg: Check for 3:33 AM
    if (hours === '03' && minutes === '33' && seconds === '00') {
        showEasterEgg();
    }
}

// Easter egg function
function showEasterEgg() {
    const predictionElement = document.getElementById('prediction');
    if (predictionElement) {
        predictionElement.textContent = "You just broke the timeline.";
        predictionElement.style.animation = "glitch 0.5s infinite";
        
        // Remove glitch effect after 5 seconds
        setTimeout(() => {
            predictionElement.style.animation = "";
        }, 5000);
    }
}

// Predictions array
const predictions = [
    "In 2099, pizza will be currency.",
    "By 2075, cats will have taken over customer service roles.",
    "In 2080, humans will communicate through memes alone.",
    "By 2100, Monday mornings will be eliminated by popular vote.",
    "In 2065, self-cleaning houses will rebel against messy owners.",
    "By 2072, aliens will complain about our bad Wi-Fi signals.",
    "In 2088, historians will argue about what 'OK Boomer' meant.",
    "By 2095, plants will demand equal voting rights.",
    "In 2077, the moon will get its own reality TV show.",
    "By 2110, time travel tourism will cause historical traffic jams.",
    "In 2060, scientists will discover that procrastination is actually a superpower.",
    "By 2085, clouds will be used as data storage units.",
    "In 2090, sneakers will be the official footwear of diplomatic meetings.",
    "By 2070, dreams will be downloadable as movies.",
    "In 2105, historians will classify emojis as a dead language."
];

// Get a random prediction
function getRandomPrediction() {
    const randomIndex = Math.floor(Math.random() * predictions.length);
    return predictions[randomIndex];
}

// Update prediction
function updatePrediction() {
    const predictionElement = document.getElementById('prediction');
    if (predictionElement) {
        predictionElement.textContent = getRandomPrediction();
    }
}

// Share functions
function shareOnWhatsApp() {
    const clockText = document.getElementById('clock').textContent;
    const predictionText = document.getElementById('prediction').textContent;
    const shareText = `It's ${clockText} — ${predictionText} Check your timeline at ${window.location.href}!`;
    const encodedText = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const clockText = document.getElementById('clock').textContent;
    const predictionText = document.getElementById('prediction').textContent;
    const shareText = `It's ${clockText} — ${predictionText}`;
    const encodedText = encodeURIComponent(shareText);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${url}`, '_blank');
}

function copyLink() {
    const clockText = document.getElementById('clock').textContent;
    const predictionText = document.getElementById('prediction').textContent;
    const shareText = `It's ${clockText} — ${predictionText} Check your timeline at ${window.location.href}!`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    alert('Message sent! (This is a demo - no message was actually sent)');
    event.target.reset();
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Initialize the app
function initApp() {
    // Initialize clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Initialize prediction
    updatePrediction();
    
    // Set up event listeners
    const travelAgainBtn = document.getElementById('travel-again');
    if (travelAgainBtn) {
        travelAgainBtn.addEventListener('click', updatePrediction);
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Set up mobile menu
    setupMobileMenu();
}

// Run the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);