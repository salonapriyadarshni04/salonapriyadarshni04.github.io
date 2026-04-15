// Updated Professional Text
const text = "Full Stack Developer | AI Enthusiast | Future Businesswoman";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80); // Thoda fast typing
    }
}

// Page load hote hi typing start hogi
window.onload = type;
