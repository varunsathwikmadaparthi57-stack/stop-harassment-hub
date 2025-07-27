// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Image carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
}

// Auto-play carousel
function autoPlay() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Initialize carousel if slides exist
if (slides.length > 0) {
    showSlide(0);
    autoPlay();
}

// Form submission handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    const requiredFields = ['name', 'phone', 'email'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            isValid = false;
            const input = document.querySelector(`[name="${field}"]`);
            if (input) {
                input.style.borderColor = '#e74c3c';
            }
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Success message
    alert('Thank you for your submission! We will contact you soon to schedule your awareness session.');
    event.target.reset();
}

// Add form event listener if form exists
const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', handleFormSubmit);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reset input border color on focus
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#ddd';
    });
});

// Emergency contact quick actions
function callEmergency(number) {
    window.location.href = `tel:${number}`;
}

function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}

// Add click handlers for emergency contacts
document.addEventListener('DOMContentLoaded', function() {
    // Add emergency contact handlers
    const emergencyNumbers = document.querySelectorAll('.emergency-number');
    emergencyNumbers.forEach(number => {
        number.addEventListener('click', function() {
            const phoneNumber = this.textContent.replace(/\D/g, '');
            callEmergency(phoneNumber);
        });
    });
    
    // Add email handlers
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(email => {
        email.addEventListener('click', function() {
            sendEmail(this.textContent);
        });
    });
});

// Add typing effect for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect if hero text exists
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText);
    }
});

// News article click handlers
function openNewsArticle(url) {
    window.open(url, '_blank');
}

// Search functionality for news
function filterNews(searchTerm) {
    const newsCards = document.querySelectorAll('.news-card');
    const term = searchTerm.toLowerCase();
    
    newsCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(term) || content.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add search functionality to news page
const searchInput = document.querySelector('#news-search');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        filterNews(this.value);
    });
}