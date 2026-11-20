const roles = [
    "ORACLE APEX DEVELOPER",
    "PL/SQL & DATABASE ARCHITECT",
    "BUILDING DIGITAL SOLUTIONS THAT MATTER"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (!typingElement) return;
    
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();





