document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe skills boxes for animation
    const skillsBoxes = document.querySelectorAll('.skills-box');
    skillsBoxes.forEach(box => {
        observer.observe(box);
    });
});