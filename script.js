// Enhanced Financial Report Slides with Navigation and Interactive Features
class FinancialReportSlides {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 2;
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.setupSlideNavigation();
        this.setupAnimations();
        this.setupInteractions();
        this.setupCounterAnimations();
        this.setupParallaxEffect();
        this.setupKeyboardNavigation();
        this.setupPieChart();
        this.updateNavigationState();
    }

    // Setup slide navigation
    setupSlideNavigation() {
        // Navigation buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const indicators = document.querySelectorAll('.indicator');

        // Add event listeners
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch/swipe support
        this.setupTouchNavigation();
    }

    // Setup touch navigation for mobile
    setupTouchNavigation() {
        let startX = 0;
        let endX = 0;
        const slideContainer = document.querySelector('.slides-container');

        slideContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        slideContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        }, { passive: true });
    }

    // Navigate to previous slide
    previousSlide() {
        if (this.isAnimating || this.currentSlide === 0) return;
        this.goToSlide(this.currentSlide - 1);
    }

    // Navigate to next slide
    nextSlide() {
        if (this.isAnimating || this.currentSlide === this.totalSlides - 1) return;
        this.goToSlide(this.currentSlide + 1);
    }

    // Go to specific slide
    goToSlide(slideIndex) {
        if (this.isAnimating || slideIndex === this.currentSlide || 
            slideIndex < 0 || slideIndex >= this.totalSlides) return;

        this.isAnimating = true;
        const currentSlideEl = document.querySelector('.slide-container.active');
        const nextSlideEl = document.getElementById(`slide-${slideIndex + 1}`);

        // Remove active class from current slide
        if (currentSlideEl) {
            currentSlideEl.classList.remove('active');
            if (slideIndex < this.currentSlide) {
                currentSlideEl.classList.add('next');
            } else {
                currentSlideEl.classList.add('prev');
            }
        }

        // Add active class to next slide
        if (nextSlideEl) {
            nextSlideEl.classList.remove('prev', 'next');
            nextSlideEl.classList.add('active');
        }

        // Update current slide index
        this.currentSlide = slideIndex;

        // Update navigation state
        this.updateNavigationState();

        // Reset animation flag after transition
        setTimeout(() => {
            this.isAnimating = false;
            // Clean up classes
            document.querySelectorAll('.slide-container').forEach(slide => {
                if (!slide.classList.contains('active')) {
                    slide.classList.remove('prev', 'next');
                }
            });
        }, 800);

        // Trigger slide-specific animations
        this.triggerSlideAnimations(slideIndex);
    }

    // Update navigation button and indicator states
    updateNavigationState() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const indicators = document.querySelectorAll('.indicator');

        // Update buttons
        if (prevBtn) prevBtn.disabled = this.currentSlide === 0;
        if (nextBtn) nextBtn.disabled = this.currentSlide === this.totalSlides - 1;

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }

    // Trigger slide-specific animations
    triggerSlideAnimations(slideIndex) {
        setTimeout(() => {
            if (slideIndex === 1) { // Second slide
                this.animatePieChart();
                this.animateGrowthStats();
                this.animateFinancialCards();
            }
        }, 300);
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
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSlide();
                    break;
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

    // Setup pie chart interactions
    setupPieChart() {
        const pieChart = document.getElementById('pieChart');
        if (pieChart) {
            pieChart.addEventListener('click', () => {
                this.animatePieChart();
            });
        }
    }

    // Animate pie chart
    animatePieChart() {
        const pieChart = document.getElementById('pieChart');
        if (pieChart) {
            pieChart.style.animation = 'none';
            setTimeout(() => {
                pieChart.style.animation = 'pieRotate 2s ease-out';
            }, 50);
        }
    }

    // Animate growth statistics
    animateGrowthStats() {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach((stat, index) => {
            setTimeout(() => {
                stat.style.transform = 'scale(1.1)';
                stat.style.color = '#22c55e';
                setTimeout(() => {
                    stat.style.transform = 'scale(1)';
                    if (!stat.classList.contains('highlight')) {
                        stat.style.color = '#1f2937';
                    }
                }, 500);
            }, index * 200);
        });

        // Animate growth arrow
        const growthArrow = document.querySelector('.growth-arrow i');
        if (growthArrow) {
            setTimeout(() => {
                growthArrow.style.animation = 'bounce 1s ease-out 3';
            }, 800);
        }
    }

    // Animate financial structure cards
    animateFinancialCards() {
        const detailCards = document.querySelectorAll('.detail-card');
        detailCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                
                setTimeout(() => {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }, 600);
            }, index * 300);
        });
    }

    // Add dynamic text effects
    addTextEffects() {
        const titlePrimary = document.querySelector('.slide-container.active .title-primary');
        const titleSecondary = document.querySelector('.slide-container.active .title-secondary');

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

// Global navigation functions for button onclick handlers
let slideInstance;

function previousSlide() {
    if (slideInstance) {
        slideInstance.previousSlide();
    }
}

function nextSlide() {
    if (slideInstance) {
        slideInstance.nextSlide();
    }
}

function goToSlide(index) {
    if (slideInstance) {
        slideInstance.goToSlide(index);
    }
}

// Initialize the slides when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    slideInstance = new FinancialReportSlides();
    
    // Add text effects after initial animations
    setTimeout(() => {
        slideInstance.addTextEffects();
    }, 1000);

    // Add accessibility improvements
    const slideContents = document.querySelectorAll('.slide-content');
    slideContents.forEach((content, index) => {
        content.setAttribute('role', 'main');
        content.setAttribute('aria-label', `Slide ${index + 1}`);
    });
    
    const companyOverview = document.querySelector('.company-overview');
    if (companyOverview) {
        companyOverview.setAttribute('role', 'region');
        companyOverview.setAttribute('aria-label', 'Informations de la société');
    }

    const financialStructure = document.querySelector('.financial-structure');
    if (financialStructure) {
        financialStructure.setAttribute('role', 'region');
        financialStructure.setAttribute('aria-label', 'Structure financière');
    }
    
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
    module.exports = FinancialReportSlides;
}