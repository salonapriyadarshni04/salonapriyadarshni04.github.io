// Isme Researcher wala role add kar diya hai
const text = "Full-Stack Developer | Tech Researcher | Future Businesswoman";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 70);
    }
}

window.onload = type;
