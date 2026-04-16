// Typing effect is necessary to fill that blank space you saw earlier!
const text = "Digital Strategist | Software Developer | Future Business Leader | National Athlete";
let i = 0;

function type() {
    const typingElement = document.getElementById("typing");
    if (typingElement && i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 75);
    }
}

// Make sure the script starts after the page loads
window.onload = function() {
    type();
};
