// Validation du formulaire de contact avec design moderne
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Réinitialiser les messages d'erreur
            clearErrors();

            let isValid = true;

            // Validation du nom
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                showError('name', 'Le nom est requis.');
                isValid = false;
            }

            // Validation de l'email
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                showError('email', 'L\'email est requis.');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showError('email', 'Veuillez entrer un email valide.');
                isValid = false;
            }

            // Validation du téléphone
            const phone = document.getElementById('phone').value.trim();
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (phone !== '' && !phoneRegex.test(phone)) {
                showError('phone', 'Veuillez entrer un numéro de téléphone valide.');
                isValid = false;
            }

            // Validation du message
            const message = document.getElementById('message').value.trim();
            if (message === '') {
                showError('message', 'Le message est requis.');
                isValid = false;
            } else if (message.length < 10) {
                showError('message', 'Le message doit contenir au moins 10 caractères.');
                isValid = false;
            }

            if (isValid) {
                // Animation de succès
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                submitBtn.classList.add('success');
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                    contactForm.reset();
                    submitBtn.innerHTML = 'Envoyer le message';
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
    }

    // Fonction pour afficher les erreurs avec style moderne
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideIn 0.3s ease-out;
        `;

        const icon = document.createElement('i');
        icon.className = 'fas fa-exclamation-circle';
        errorElement.insertBefore(icon, errorElement.firstChild);

        field.parentNode.insertBefore(errorElement, field.nextSibling);
        field.style.borderColor = '#ef4444';
    }

    // Fonction pour effacer les erreurs
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.remove();
        });

        // Réinitialiser la couleur des bordures
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(function(input) {
            input.style.borderColor = '';
        });
    }

    // Animation au défilement améliorée
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.service-card, .testimonial, .blog-post, .team-member');
    animateElements.forEach(function(element) {
        observer.observe(element);
    });

    // Ajouter des styles pour l'animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .testimonial, .blog-post, .team-member {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-in {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .error-message {
            animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .btn.success {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
            animation: pulse 0.6s ease-in-out;
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    // Effet de particules sur le hero
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
            `;

            hero.appendChild(particle);
        }
    }

    createParticles();

    // Animation des statistiques (si présentes)
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stat-number');
        numbers.forEach(function(number) {
            const target = parseInt(number.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(function() {
                current += step;
                if (current >= target) {
                    number.textContent = target;
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    // Observer pour déclencher l'animation des nombres
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateNumbers();
                statObserver.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statObserver.observe(statsSection);
    }

    // Menu mobile moderne
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-menu-open');
        });
    }

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Effet de parallax sur le hero
    let lastScrollY = window.scrollY;
    const hero = document.querySelector('.hero');

    function updateParallax() {
        if (!hero) return;

        const scrollY = window.scrollY;
        const rate = scrollY * -0.5;

        hero.style.transform = `translateY(${rate}px)`;
        lastScrollY = scrollY;

        requestAnimationFrame(updateParallax);
    }

    // Démarrer l'effet parallax seulement sur desktop
    if (window.innerWidth > 768) {
        requestAnimationFrame(updateParallax);
    }

    // Préloader les images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Dark Mode Functionality
    function initTheme() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;

        // Get saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Add smooth transition
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }

    initTheme();

    // Magnetic Effect for Buttons
    function initMagneticEffect() {
        const magneticElements = document.querySelectorAll('.magnetic');

        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }

    initMagneticEffect();

    // Enhanced Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 150);
                }
            });
        }, observerOptions);

        // Observe various elements
        const animateElements = document.querySelectorAll('.service-card, .testimonial, .blog-post, .team-member, .interactive-card');
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    initScrollAnimations();

    // Add stagger classes to elements
    function addStaggerClasses() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.classList.add(`stagger-${(index % 4) + 1}`);
        });

        const testimonials = document.querySelectorAll('.testimonial');
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.add(`stagger-${(index % 3) + 1}`);
        });
    }

    addStaggerClasses();

    // Parallax effect for hero sections
    function initParallax() {
        const heroSections = document.querySelectorAll('.hero');

        function updateParallax() {
            heroSections.forEach(hero => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
            requestAnimationFrame(updateParallax);
        }

        if (window.innerWidth > 768) {
            requestAnimationFrame(updateParallax);
        }
    }

    initParallax();

    // Mobile Touch Enhancements
    function initMobileTouch() {
        // Swipe to close mobile menu
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            let startX, startY;

            navLinks.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });

            navLinks.addEventListener('touchmove', (e) => {
                if (!startX || !startY) return;

                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                const diffX = startX - currentX;
                const diffY = startY - currentY;

                // If horizontal swipe is greater than vertical
                if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
                    // Swipe left to close menu
                    navLinks.classList.remove('mobile-menu-open');
                    const toggle = document.querySelector('.mobile-menu-toggle');
                    if (toggle) {
                        toggle.classList.remove('open');
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        }

        // Touch feedback for interactive elements
        const interactiveElements = document.querySelectorAll('.interactive-card, .btn, .magnetic');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.classList.add('touch-active');
            });

            element.addEventListener('touchend', () => {
                setTimeout(() => {
                    element.classList.remove('touch-active');
                }, 150);
            });
        });

        // Prevent zoom on double tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        // Better mobile scrolling
        if ('scrollBehavior' in document.documentElement.style === false) {
            // Polyfill for smooth scrolling on mobile
            const smoothScroll = (target) => {
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            };

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    smoothScroll(this.getAttribute('href'));
                });
            });
        }

        // Mobile viewport height fix
        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
    }

    initMobileTouch();
});
