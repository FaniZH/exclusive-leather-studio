document.addEventListener("DOMContentLoaded", () => {

// NAVBAR + TOP BUTTON
const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(navbar){
if(window.scrollY > 100){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
}

if(topBtn){
if(window.scrollY > 100){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}
}

});

// SCROLL TO TOP
if(topBtn){
topBtn.onclick = () => {
window.scrollTo({top:0,behavior:"smooth"});
};
}


// BURGER MENU
const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if(menuToggle && navLinksContainer){
menuToggle.addEventListener("click", () => {
navLinksContainer.classList.toggle("active");
});
}


// PRODUCT TABS
const tabButtons = document.querySelectorAll(".tab-btn");
const productCards = document.querySelectorAll(".product-card");

tabButtons.forEach(button => {

button.addEventListener("click", function(){

tabButtons.forEach(btn => btn.classList.remove("active"));
this.classList.add("active");

const filter = this.dataset.filter;

productCards.forEach(card => {

if(filter === "all" || card.classList.contains(filter)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

});


// ACTIVE NAV LINK
const navLinks = document.querySelectorAll(".nav-link");
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {

const linkPath = link.getAttribute("href").split("/").pop();

if(currentPath === linkPath){
link.classList.add("active");
}else{
link.classList.remove("active");
}

});


// SERVICES ACTIVE WHEN SCROLLING HOME
if(currentPath === "index.html" || currentPath === ""){

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

let scrollPos = window.scrollY + 200;

sections.forEach(section => {

if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){

navLinks.forEach(link => link.classList.remove("active"));

const activeLink = document.querySelector(`.nav-link[href="index.html#${section.id}"]`);

if(activeLink){
activeLink.classList.add("active");
}

}

});

});

}


// AUTO YEAR
const year = document.getElementById("year");

if(year){
year.textContent = new Date().getFullYear();
}


// LIGHTBOX FOR GALLERY + PRODUCTS
const viewIcons = document.querySelectorAll(".overlay i");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

viewIcons.forEach(icon => {

icon.addEventListener("click", function(){

const galleryItem = this.closest(".gallery-item");
const productItem = this.closest(".product-image");

let img;

if(galleryItem){
img = galleryItem.querySelector("img");
}

if(productItem){
img = productItem.querySelector("img");
}

if(img && lightbox){
lightboxImg.src = img.src;
lightbox.style.display = "flex";
}

});

});


if(lightboxClose){
lightboxClose.addEventListener("click", () => {
lightbox.style.display = "none";
});
}


if(lightbox){
lightbox.addEventListener("click", (e) => {
if(e.target === lightbox){
lightbox.style.display = "none";
}
});
}

});