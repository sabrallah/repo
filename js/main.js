document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Change icon based on menu state
            if (menuToggle.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (menu && menu.classList.contains('active') && 
            !menu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Testimonials Slider
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlider && testimonials.length > 0) {
        let currentIndex = 0;
        
        // Function to update slider position
        function updateSlider() {
            testimonialSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        // Initialize slider
        updateSlider();
        
        // Previous button click
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
                updateSlider();
            });
        }
        
        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        }
        
        // Auto slide every 5 seconds
        setInterval(function() {
            currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            
            // Get all required inputs
            const requiredInputs = contactForm.querySelectorAll('[required]');
            
            // Check each required field
            requiredInputs.forEach(input => {
                const errorMessage = input.nextElementSibling;
                
                if (input.value.trim() === '') {
                    isValid = false;
                    input.classList.add('error');
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.style.display = 'block';
                    }
                } else {
                    input.classList.remove('error');
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.style.display = 'none';
                    }
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim() !== '') {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        isValid = false;
                        input.classList.add('error');
                        if (errorMessage && errorMessage.classList.contains('error-message')) {
                            errorMessage.style.display = 'block';
                            errorMessage.textContent = 'Veuillez entrer une adresse email valide';
                        }
                    }
                }
            });
            
            // Prevent form submission if validation fails
            if (!isValid) {
                event.preventDefault();
            } else {
                // Here you would typically handle the form submission via AJAX
                // For demo purposes, we'll just prevent the default submission
                event.preventDefault();
                
                // Show success message
                const formSuccess = document.createElement('div');
                formSuccess.className = 'form-success';
                formSuccess.innerHTML = '<p><i class="fas fa-check-circle"></i> Votre message a été envoyé avec succès. Nous vous contacterons bientôt.</p>';
                
                // Insert success message after form
                contactForm.style.display = 'none';
                contactForm.parentNode.insertBefore(formSuccess, contactForm.nextSibling);
                
                // Reset form
                contactForm.reset();
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                const errorMessage = input.nextElementSibling;
                
                if (input.hasAttribute('required') && input.value.trim() === '') {
                    input.classList.add('error');
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.style.display = 'block';
                    }
                } else {
                    input.classList.remove('error');
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.style.display = 'none';
                    }
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim() !== '') {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        input.classList.add('error');
                        if (errorMessage && errorMessage.classList.contains('error-message')) {
                            errorMessage.style.display = 'block';
                            errorMessage.textContent = 'Veuillez entrer une adresse email valide';
                        }
                    }
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (menu && menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active menu item based on scroll position
    function setActiveMenuItem() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.menu a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + currentSection) {
                item.classList.add('active');
            }
        });
    }
    
    // Call on scroll
    window.addEventListener('scroll', setActiveMenuItem);
    
    // Call on page load
    setActiveMenuItem();
    
    // Animation on scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.reveal');
        
        elements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});