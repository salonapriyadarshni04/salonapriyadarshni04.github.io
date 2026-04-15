// High-Impact Professional Roles
const text = "Digital Strategist | National Athlete | Future Business Leader";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 70);
    }
}

window.onload = type;
