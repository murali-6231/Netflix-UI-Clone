/**
 * Netflix Landing Page - JavaScript
 * Handles FAQ accordion functionality and interactive elements
 */

// ========================================
// FAQ Accordion Functionality
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Add click event listener to each FAQ question
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Get the parent FAQ item
            const faqItem = this.parentElement;
            
            // Check if this item is currently active
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========================================
    // Button Hover Effects (Optional Enhancement)
    // ========================================
    
    const buttons = document.querySelectorAll('button, .btn-signin, .btn-get-started');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // ========================================
    // Smooth Scroll for Anchor Links (if any added later)
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // ========================================
    // Console Welcome Message
    // ========================================
    
    console.log('%c🎬 Netflix Clone Landing Page', 'color: #e50914; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #808080; font-size: 14px;');
    
});
