const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navlink = document.querySelector(".nav-link"); 

hamburger.addEventListener("click", () => {
    // आपकी CSS में "active" या "v-class" जो भी नाम है, उसे यहाँ लिखें
    navlink.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp"); 
});