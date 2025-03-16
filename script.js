// Toggle mobile menu
function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburgerIcon.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    
    // Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
}

// Dark mode toggle
const checkbox = document.getElementById('checkbox');
const storedTheme = localStorage.getItem('theme') || 'light';

// Set initial theme based on stored preference
if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
}

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add CSS class for animations
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    
    // Add this CSS to style.css
    const style = document.createElement('style');
    style.textContent = `
        .hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: all 1s ease;
        }
        
        .show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: var(--primary-color) !important;
        }
        
        .loaded .hero-section {
            animation: fadeIn 1s ease;
        }
        
        body.no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});