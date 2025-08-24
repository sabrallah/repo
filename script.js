// Enhanced Financial Report Slide with Interactive Features
class FinancialReportSlide {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupInteractions();
        this.setupCounterAnimations();
        this.setupParallaxEffect();
        this.setupKeyboardNavigation();
    }

    // Setup entrance animations with staggered timing
    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all info cards for staggered animation
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach((card, index) => {
            card.style.animationDelay = `${0.2 + (index * 0.1)}s`;
            observer.observe(card);
        });
    }

    // Setup interactive hover effects and click handlers
    setupInteractions() {
        const infoCards = document.querySelectorAll('.info-card');
        
        infoCards.forEach(card => {
            // Enhanced hover effect
            card.addEventListener('mouseenter', (e) => {
                this.animateCardHover(e.target, true);
            });

            card.addEventListener('mouseleave', (e) => {
                this.animateCardHover(e.target, false);
            });

            // Click effect for better interaction feedback
            card.addEventListener('click', (e) => {
                this.animateCardClick(e.target);
            });
        });

        // Company logo interaction
        const logo = document.querySelector('.company-logo');
        if (logo) {
            logo.addEventListener('click', () => {
                this.animateLogoClick();
            });
        }

        // Report badge pulse effect
        this.setupReportBadgePulse();
    }

    // Animate card hover effects
    animateCardHover(card, isHover) {
        const icon = card.querySelector('.info-icon');
        const content = card.querySelector('.info-content span');

        if (isHover) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            content.style.color = '#d97706';
            card.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            icon.style.transform = 'scale(1) rotate(0deg)';
            content.style.color = '#1f2937';
            card.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    }

    // Animate card click effect
    animateCardClick(card) {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
        }, 150);

        // Create ripple effect
        this.createRippleEffect(card);
    }

    // Create ripple effect on card click
    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(245, 158, 11, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            width: ${size}px;
            height: ${size}px;
            left: 50%;
            top: 50%;
            margin-left: -${size/2}px;
            margin-top: -${size/2}px;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Animate logo click
    animateLogoClick() {
        const logo = document.querySelector('.company-logo');
        const icon = logo.querySelector('i');
        
        icon.style.animation = 'spin 1s ease-in-out';
        logo.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            icon.style.animation = '';
            logo.style.transform = 'scale(1)';
        }, 1000);
    }

    // Setup report badge pulse effect
    setupReportBadgePulse() {
        const badge = document.querySelector('.report-badge');
        if (badge) {
            setInterval(() => {
                badge.style.animation = 'pulse 2s ease-in-out';
                setTimeout(() => {
                    badge.style.animation = '';
                }, 2000);
            }, 5000);
        }
    }

    // Setup counter animations for numeric values
    setupCounterAnimations() {
        const numericElements = document.querySelectorAll('.info-content span');
        
        numericElements.forEach(element => {
            const text = element.textContent;
            const numbers = text.match(/\d+/g);
            
            if (numbers && numbers.length > 0) {
                element.addEventListener('mouseenter', () => {
                    this.animateNumber(element, numbers[0]);
                });
            }
        });
    }

    // Animate numeric values
    animateNumber(element, targetNumber) {
        const originalText = element.textContent;
        const duration = 1000;
        const start = performance.now();
        const startValue = 0;
        const endValue = parseInt(targetNumber);

        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
            element.textContent = originalText.replace(targetNumber, currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = originalText;
            }
        };

        requestAnimationFrame(animate);
    }

    // Setup parallax effect for background elements
    setupParallaxEffect() {
        const bgCircles = document.querySelectorAll('.bg-circle');
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            bgCircles.forEach((circle, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;
                
                circle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // Setup keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Enter':
                case ' ':
                    const focusedCard = document.activeElement.closest('.info-card');
                    if (focusedCard) {
                        this.animateCardClick(focusedCard);
                    }
                    break;
                case 'Tab':
                    this.highlightFocusedElement();
                    break;
            }
        });

        // Make info cards focusable
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach((card, index) => {
            card.setAttribute('tabindex', index + 1);
            card.addEventListener('focus', () => {
                card.style.outline = '3px solid #f59e0b';
                card.style.outlineOffset = '2px';
            });
            card.addEventListener('blur', () => {
                card.style.outline = 'none';
            });
        });
    }

    // Highlight focused element
    highlightFocusedElement() {
        setTimeout(() => {
            const focused = document.activeElement;
            if (focused.classList.contains('info-card')) {
                focused.style.transform = 'translateY(-8px) scale(1.02)';
                setTimeout(() => {
                    focused.style.transform = 'translateY(-5px) scale(1)';
                }, 200);
            }
        }, 100);
    }

    // Add dynamic text effects
    addTextEffects() {
        const titlePrimary = document.querySelector('.title-primary');
        const titleSecondary = document.querySelector('.title-secondary');

        if (titlePrimary) {
            this.addTypewriterEffect(titlePrimary);
        }

        if (titleSecondary) {
            setTimeout(() => {
                this.addGlowEffect(titleSecondary);
            }, 2000);
        }
    }

    // Typewriter effect for main title
    addTypewriterEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #1f2937';

        let i = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }, 100);
    }

    // Glow effect for secondary title
    addGlowEffect(element) {
        element.style.textShadow = '0 0 20px rgba(245, 158, 11, 0.5)';
        element.style.animation = 'glow 2s ease-in-out infinite alternate';
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    @keyframes glow {
        from {
            text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
        }
        to {
            text-shadow: 0 0 30px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.3);
        }
    }

    .info-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .info-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .info-content span {
        transition: color 0.3s ease;
    }

    .company-logo {
        transition: transform 0.3s ease;
        cursor: pointer;
    }

    .info-card:focus {
        outline: 3px solid #f59e0b;
        outline-offset: 2px;
    }
`;

document.head.appendChild(style);

// Initialize the slide when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const slide = new FinancialReportSlide();
    
    // Add text effects after initial animations
    setTimeout(() => {
        slide.addTextEffects();
    }, 1000);

    // Add accessibility improvements
    document.querySelector('.slide-content').setAttribute('role', 'main');
    document.querySelector('.company-overview').setAttribute('role', 'region');
    document.querySelector('.company-overview').setAttribute('aria-label', 'Informations de la société');
    
    // Add loading state
    document.body.classList.add('loaded');
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Performance optimization: Debounce mouse move events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FinancialReportSlide;
}