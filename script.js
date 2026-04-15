const text = "B.Tech CSE Student | Future Businesswoman";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

// Page load hote hi typing start hogi
window.onload = type;
