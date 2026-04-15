// Polite aur balanced roles
const text = "Tech Explorer | Management Enthusiast | Future Businesswoman";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 70);
    }
}

window.onload = type;
