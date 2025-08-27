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
});
