// Animation d'entrée des éléments
document.addEventListener('DOMContentLoaded', function() {
    // Animation séquentielle des éléments
    const elements = [
        '.slide-header',
        '.slide-subtitle',
        '.separator',
        '.company-overview h3',
        '.overview-item'
    ];

    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            if (selector === '.overview-item') {
                // Animation des éléments de la grille avec délai
                const items = document.querySelectorAll(selector);
                items.forEach((item, itemIndex) => {
                    setTimeout(() => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.transition = 'all 0.6s ease';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    }, 800 + (itemIndex * 200));
                });
            } else {
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 200);
            }
        }
    });

    // Animation du logo
    const logo = document.querySelector('.logo-circle');
    if (logo) {
        setTimeout(() => {
            logo.style.transform = 'scale(0) rotate(180deg)';
            logo.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            setTimeout(() => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            }, 100);
        }, 400);
    }

    // Effet de hover amélioré pour les éléments de la grille
    const overviewItems = document.querySelectorAll('.overview-item');
    overviewItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.2)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animation du titre principal
    const mainTitle = document.querySelector('.slide-title h2');
    if (mainTitle) {
        setTimeout(() => {
            mainTitle.style.backgroundSize = '200% 200%';
            mainTitle.style.animation = 'gradientShift 3s ease-in-out infinite';
        }, 1000);
    }

    // Animation du séparateur
    const separator = document.querySelector('.separator');
    if (separator) {
        setTimeout(() => {
            separator.style.width = '0%';
            separator.style.transition = 'width 1.5s ease-in-out';
            
            setTimeout(() => {
                separator.style.width = '100%';
            }, 100);
        }, 600);
    }
});

// Animation du gradient pour le titre
const style = document.createElement('style');
style.textContent = `
    @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
`;
document.head.appendChild(style);

// Gestion de la navigation (pour les futurs slides)
let currentSlide = 1;
const totalSlides = 1; // Pour l'instant, un seul slide

function showSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > totalSlides) return;
    
    currentSlide = slideNumber;
    
    // Mise à jour des boutons de navigation
    document.getElementById('prevBtn').disabled = currentSlide === 1;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
    
    // Animation de transition
    const currentSlideElement = document.querySelector('.slide.active');
    if (currentSlideElement) {
        currentSlideElement.style.opacity = '0';
        currentSlideElement.style.transform = 'translateX(-20px)';
        currentSlideElement.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            currentSlideElement.classList.remove('active');
            const targetSlide = document.getElementById(`slide${slideNumber}`);
            if (targetSlide) {
                targetSlide.classList.add('active');
                targetSlide.style.opacity = '1';
                targetSlide.style.transform = 'translateX(0)';
            }
        }, 250);
    }
}

// Event listeners pour la navigation
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
});

// Navigation au clavier
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' && currentSlide > 1) {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
});

// Effet de parallaxe subtil au scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.slide');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Animation des nombres dans le footer
function animateNumbers() {
    const slideNumber = document.querySelector('.slide-number');
    if (slideNumber) {
        slideNumber.style.transform = 'scale(1.2)';
        slideNumber.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            slideNumber.style.transform = 'scale(1)';
        }, 300);
    }
}

// Déclencher l'animation des nombres après le chargement
setTimeout(animateNumbers, 2000);

// Effet de focus sur les éléments interactifs
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Amélioration de l'accessibilité
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des attributs ARIA
    const slide = document.querySelector('.slide');
    if (slide) {
        slide.setAttribute('role', 'region');
        slide.setAttribute('aria-label', 'Premier slide - Aperçu de la société RAYAN GOLD');
    }
    
    // Améliorer la navigation au clavier
    const focusableElements = document.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #667eea';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});