const text = "Software Developer | Future Business Leader | Digital Strategist | National Athlete";
let i = 0;

function type() {
    const element = document.getElementById("typing");
    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 75);
    }
}

window.onload = type;

