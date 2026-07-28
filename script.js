// ===============================
// Portfolio Website JavaScript
// ===============================

// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Tshwarelo Kekana's Portfolio!");
});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "⬆";

button.id = "topBtn";

document.body.appendChild(button);

button.style.display = "none";

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

};

button.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ===============================
// Automatically Update Footer Year
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Tshwarelo Kekana`;

}
// ===============================
// Professional Typing Animation
// ===============================

const name = "Tshwarelo Kekana";

const roles = [
    "Final-Year Information Technology Student",
    "Aspiring Software Developer",
    "Cybersecurity Enthusiast",
    "Problem Solver",
    "Lifelong Learner"
];

const nameElement = document.getElementById("typing-name");
const roleElement = document.getElementById("typing-role");

let nameIndex = 0;

function typeName(){

    if(nameIndex < name.length){

        nameElement.innerHTML += name.charAt(nameIndex);

        nameIndex++;

        setTimeout(typeName,120);

    }else{

        setTimeout(typeRole,700);

    }

}

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole(){

    let currentRole = roles[roleIndex];

    if(!deleting){

        roleElement.textContent =
            currentRole.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentRole.length){

            deleting = true;

            setTimeout(typeRole,1800);

            return;

        }

    }else{

        roleElement.textContent =
            currentRole.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeRole,deleting ? 40 : 80);

}

window.onload = () =>{

    typeName();

};
