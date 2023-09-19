// JavaScript
const burgerMenuIcon = document.querySelector(".nav-burger-menu i.fa-bars");
const closeMenuIcon = document.querySelector(".burger-menu i.fa-times");
const burgerMenu = document.querySelector(".burger-menu");

// Function to open the burger menu
function openBurgerMenu() {
    burgerMenu.style.transform = "translateX(0)";
}

// Function to close the burger menu
function closeBurgerMenu() {
    burgerMenu.style.transform = "translateX(-100%)";
}

// Initially hide the burger menu
burgerMenu.style.transform = "translateX(-100%)";

// Event listener for opening the burger menu
burgerMenuIcon.addEventListener("click", openBurgerMenu);

// Event listener for closing the burger menu
closeMenuIcon.addEventListener("click", closeBurgerMenu);
