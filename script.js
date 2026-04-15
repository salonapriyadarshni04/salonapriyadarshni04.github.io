let text = "B.Tech CSE Student | Future Businesswoman | App Developer 🚀";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();

// Blinking cursor
setInterval(() => {
    let cursor = document.getElementById("cursor");
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);
