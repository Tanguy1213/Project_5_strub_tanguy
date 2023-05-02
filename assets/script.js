const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner les éléments HTML pertinents
const banner = document.querySelector("#banner");
const arrowLeft = banner.querySelector(".arrow_left");
const arrowRight = banner.querySelector(".arrow_right");
const bannerImg = banner.querySelector(".banner-img");
const bannerDescription = banner.querySelector("p");

// Initialiser l'index de la diapositive actuelle à 0
let currentSlideIndex = 0;

// Fonction qui met à jour l'image et la description en fonction de l'index de la diapositive
function updateBanner() {
	const currentSlide = slides[currentSlideIndex];
	bannerImg.src = "./assets/images/slideshow/" + currentSlide.image;
	bannerDescription.innerHTML = currentSlide.tagLine;
	updateDots();
}

// Fonction qui met à jour les points de la bannière en fonction de l'index de la diapositive
function updateDots() {
	const dotElements = banner.querySelectorAll(".dot");
	for (var i = 0; i < dotElements.length; i++) {
		if (i === currentSlideIndex) {
			dotElements[i].classList.add("dot_selected"); // Ajout de la classe dot_selected si l'index correspond à l'itérateur
		} else {
			dotElements[i].classList.remove("dot_selected"); // Sinon suppression de la classe
		}
	}
}
// Ajouter un événement de clic à la flèche gauche
arrowLeft.addEventListener("click", function () {
	currentSlideIndex = (currentSlideIndex + slides.length - 1) % slides.length; // Défilement infini grace au modulo
	updateBanner();
	console.log("La flèche gauche a été cliqué !");
	console.log(currentSlideIndex);
});

// Ajouter un événement de clic à la flèche droite
arrowRight.addEventListener("click", function () {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Défilement infini grace au modulo
	updateBanner();
	console.log("La flèche droite a été cliqué !");
	console.log(currentSlideIndex);
});




