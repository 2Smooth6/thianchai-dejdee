// ==========================================
// PORTFOLIO INTERACTIVITY & ANIMATIONS
// ==========================================

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
}

function updateThemeToggle(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
});

// Navigation Link Active State
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function updateActiveLink() {
    let current = '';
    
    pages.forEach(page => {
        const pageTop = page.offsetTop;
        const pageHeight = page.clientHeight;
        
        if (window.scrollY >= pageTop - 200) {
            current = page.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll Behavior
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // Initial call

// Animate Elements on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.stat-card, .featured-card, .skill-card, .tool-card, .project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'var(--color-accent-secondary)';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 1500);
    });
}

// Parallax effect on hero section
const hero = document.querySelector('.hero');
const particles = document.querySelectorAll('.particle');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (hero) {
        const heroBg = hero.querySelector('::before');
        if (scrollY < window.innerHeight) {
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.5;
                particle.style.transform = `translateY(${scrollY * speed}px)`;
            });
        }
    }
});

// Hover effects for interactive elements
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu (if needed in future)
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

initMobileMenu();

// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let isNavbarVisible = true;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        if (isNavbarVisible) {
            navbar.style.transform = 'translateY(-100%)';
            isNavbarVisible = false;
        }
    } else {
        // Scrolling up
        if (!isNavbarVisible) {
            navbar.style.transform = 'translateY(0)';
            isNavbarVisible = true;
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Typing animation for hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize theme on page load
initTheme();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Log initialization
console.log('✨ Portfolio loaded successfully!');
