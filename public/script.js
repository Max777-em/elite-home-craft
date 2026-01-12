// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio Before/After Slider
const sliders = document.querySelectorAll('.slider-control');

sliders.forEach(slider => {
    slider.addEventListener('input', function() {
        const portfolioItem = this.closest('.portfolio-slider');
        const afterImage = portfolioItem.querySelector('.after');
        const value = this.value;

        afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    });
});

// Testimonials Carousel
const testimonialTrack = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function updateCarousel() {
    const offset = -currentTestimonial * 100;
    testimonialTrack.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateCarousel();
});

// Auto-advance testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateCarousel();
}, 5000);

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for contacting us! We will get back to you shortly.');

    // Reset form
    contactForm.reset();
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// Scroll Animations (Fade in on scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .contact-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone Number Formatting (Optional)
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }

    e.target.value = value;
});

// Add loading state to form submission
contactForm.addEventListener('submit', function(e) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate sending (in real scenario, this would be an API call)
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Lazy load images (if you add real images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
