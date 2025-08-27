// Validation du formulaire de contact
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
                // Simuler l'envoi du formulaire
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                contactForm.reset();
            }
        });
    }
    
    // Fonction pour afficher les erreurs
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '0.5rem';
        
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    
    // Fonction pour effacer les erreurs
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.remove();
        });
    }
    
    // Animation au défilement
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.service-card, .testimonial, .blog-post');
    animateElements.forEach(function(element) {
        observer.observe(element);
    });
    
    // Ajouter des styles pour l'animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .testimonial, .blog-post {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Menu mobile (si nécessaire pour une version mobile plus complexe)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-menu-open');
        });
    }
});
