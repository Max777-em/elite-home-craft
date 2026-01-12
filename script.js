// ====================================
// ELITE HOME CRAFT - 2026 INTERACTIONS
// Advanced animations & micro-interactions
// ====================================

// ========== MOBILE NAVIGATION ==========
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Animate hamburger to X
    const spans = mobileToggle.querySelectorAll('span');
    if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans.forEach(span => {
            span.style.transform = 'rotate(0)';
        });
    }
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== PORTFOLIO BEFORE/AFTER SLIDER ==========
const sliders = document.querySelectorAll('.slider-control');

sliders.forEach(slider => {
    slider.addEventListener('input', function() {
        const portfolioItem = this.closest('.portfolio-slider');
        const afterImage = portfolioItem.querySelector('.after');
        const value = this.value;
        afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    });
});

// ========== TESTIMONIALS CAROUSEL ==========
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

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateCarousel();
}, 5000);

// ========== ENHANCED SCROLL REVEAL ANIMATIONS ==========
const revealElements = () => {
    const reveals = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .about-text, .about-image-grid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .contact-item, .about-img, .feature').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Smooth Scroll Header Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .contact-item, .about-img, .feature');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            setTimeout(() => {
                entry.target.classList.add('active');
            }, 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    // Observe elements for scroll animations
    const animateOnScroll = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .contact-item, .feature, .about-img');

    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .contact-item, .about-img');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 100);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
});

// Service Cards 3D Tilt Effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - rect.height / 2) / 20;
        const rotateY = (x - rect.width / 2) / 20;

        card.style.transform = `perspective(1000px) rotateX(${-rotateY}deg) rotateY(${rotateX}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Smooth scroll reveal animations
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .about-img, .contact-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card').forEach(el => {
    el.classList.add('reveal');
    observerReveal.observe(el);
});

// Parallax effect on scroll
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');

            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight);
            }

            ticking = false;
        });

        ticking = true;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Animate numbers in stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = stat.textContent;
        const isPercent = target.includes('%');
        const isPlus = target.includes('+');
        const number = parseInt(target);

        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                const display = Math.floor(current);
                stat.textContent = display + (isPlus ? '+' : isPercent ? '%' : '');
            }
        }, 30);
    });
});

// Smooth reveal on scroll for all sections
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .about-paragraph, .contact-item');
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealOnScroll.observe(el);
});

// Add loading class for smooth page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Cursor glow effect (optional - modern touch)
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.2s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(3)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}
