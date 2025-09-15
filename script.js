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
// Positive Predictions array
const predictions = [
    "By 2075, peace treaties will be signed with smiles instead of pens.",
    "In 2090, every home will have free clean energy from the stars.",
    "By 2080, kindness will be the most valuable currency.",
    "In 2100, diseases like cancer will only exist in history books.",
    "By 2072, education will be free and personalized for everyone.",
    "In 2088, humans will finally learn to live in harmony with nature.",
    "By 2095, travel between planets will feel like taking a weekend road trip.",
    "In 2077, laughter will be scientifically proven to extend human life.",
    "By 2110, humanity will have planted more trees than ever cut down.",
    "In 2060, technology will allow people to instantly translate every language — no barriers.",
    "By 2085, oceans will be restored to crystal-clear beauty, full of life again.",
    "In 2090, every child will grow up with equal opportunities, no matter where they're born.",
    "By 2070, dreams will be recorded and used to create beautiful art.",
    "In 2105, humans and AI will co-create masterpieces that inspire generations.",
    "By 2120, people will work only 2 days a week — the rest will be joy and creativity.",
    "By 2068, food scarcity will end — everyone will have enough to eat.",
    "In 2082, space schools will allow kids to study among the stars.",
    "By 2099, music will be a universal language understood by all species.",
    "In 2108, the average human lifespan will pass 120 years — in good health.",
    "By 2089, wars will be replaced by friendly competitions and innovation challenges.",
    "In 2074, every city will have floating gardens in the skies.",
    "By 2115, poverty will no longer exist anywhere on Earth.",
    "In 2067, solar paint will turn every wall into a power source.",
    "By 2102, humanity will discover cures for every known mental illness.",
    "In 2091, all children will grow up with access to safe, clean water.",
    "By 2076, creativity will be the top skill valued worldwide.",
    "In 2112, people will spend more time exploring art, music, and love than working.",
    "By 2098, robots and humans will live as true friends and collaborators.",
    "In 2086, pollution will be reduced to near zero by innovation.",
    "By 2106, happiness will be included as a global human right.",
    "In 2073, travel time between continents will be less than an hour.",
    "By 2122, humans will visit other galaxies for exploration.",
    "In 2093, friendship networks will span across planets.",
    "By 2087, every person will have the chance to learn and create freely.",
    "In 2104, libraries will contain full experiences — not just books.",
    "By 2118, empathy will be the strongest force guiding leaders.",
    "In 2069, floating cities will be powered entirely by renewable energy.",
    "By 2084, human creativity will lead to unimaginable beauty in design.",
    "In 2109, everyone will live in smart, eco-friendly homes.",
    "By 2096, humans will develop the ability to grow new organs safely.",
    "In 2111, people will celebrate differences instead of fearing them.",
    "By 2079, sports will be played both on Earth and in space.",
    "In 2103, kindness will be taught as the most important subject in schools.",
    "By 2125, humanity will discover music written in the stars.",
    "In 2081, holidays will be spent on other planets like weekend getaways.",
    "By 2117, oceans will glow with life like living art pieces.",
    "In 2097, friendships will last lifetimes thanks to shared memories stored forever.",
    "By 2107, humans will speak with animals using new technology.",
    "In 2078, equality will no longer be a dream — it will be the norm.",
    "By 2114, people will be able to relive their happiest moments at will.",
    "In 2128, art and science will merge into one universal language of creation."
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
