// --- HEADER LINK HOVER EFFECT ---
document.querySelectorAll("header ul li a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#fc8019";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "#fff";  // fixed color
  });
});

// --- INPUT PLACEHOLDER ANIMATION ---
const locationInput = document.getElementById("location");
const searchInput = document.querySelector(".sc-ggqIjW");

[locationInput, searchInput].forEach(input => {
  input.addEventListener("focus", () => {
    input.style.transform = "scale(1.05)";
  });
  input.addEventListener("blur", () => {
    input.style.transform = "scale(1)";
  });
});

// --- IMAGE FLOATING ANIMATION ---
const images = document.querySelectorAll(".sc-eeDRCY");
images.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "translateY(-10px) scale(1.05)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "translateY(0) scale(1)";
  });
});

// -------------------------------
// 🚀 GET APP DROPDOWN (FINAL FIXED)
// -------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".getAppBtn");
    const drop = document.getElementById("app-dropdown");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (drop.classList.contains("show-dropdown")) {
            drop.classList.remove("show-dropdown");
        } else {
            drop.classList.add("show-dropdown");
        }
    });
});
// Select the "Sign in" link (header me)
const signInLink = Array.from(document.querySelectorAll('header ul li a'))
                        .find(el => el.textContent.trim() === 'Sign in');

const popup = document.getElementById('signInPopup');

// Click event to toggle popup
signInLink.addEventListener('click', (e) => {
    e.preventDefault(); // page reload prevent
    popup.classList.toggle('active');
});

// Optional: Click outside popup to close
window.addEventListener('click', (e) => {
    if(popup.classList.contains('active') && !popup.contains(e.target) && e.target !== signInLink){
        popup.classList.remove('active');
    }
});