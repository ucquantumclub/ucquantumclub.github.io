// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.querySelector(".menu-icon");
    
    if (navLinks.classList.contains("show") && 
        !event.target.closest("#nav-links") && 
        !event.target.closest(".menu-icon")) {
        navLinks.classList.remove("show");
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        const navLinks = document.getElementById("nav-links");
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
        
        // Scroll to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});