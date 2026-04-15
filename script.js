const text = "Digital Architect | Tech Researcher | Strategic Visionary";
let i = 0;

function type() {
    const element = document.getElementById("typing");
    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}

window.onload = type;
