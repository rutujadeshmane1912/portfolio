const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'nav-active' class to slide the menu in/out
    navLinks.classList.toggle('nav-active');
    
    // Optional: Animate the hamburger into an "X"
    hamburger.classList.toggle('toggle');
});