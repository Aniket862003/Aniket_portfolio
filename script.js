const text = [
    "MERN Stack Developer",
    "AWS Cloud Practitioner",
    "Full-Stack Web Developer"
];

let index = 0;
function typeEffect(){
    document.getElementById("typing").innerHTML = text[index];
    index = (index + 1) % text.length;
}
setInterval(typeEffect, 2000);
typeEffect();


// ✅ WhatsApp Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "919028117780"; // without + sign

    let whatsappURL = "https://wa.me/" + whatsappNumber + "?text="
        + "Name: " + name + "%0a"
        + "Email: " + email + "%0a"
        + "Message: " + message;

    window.open(whatsappURL, "_blank");
});


// ✅ Hamburger Menu Logic
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
});


