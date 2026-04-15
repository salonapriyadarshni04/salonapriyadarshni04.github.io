// Aise roles jo dekhne wale ko impress kar dein
const text = "Digital Architect | Tech Researcher | Strategic Visionary";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 75);
    }
}

window.onload = type;
