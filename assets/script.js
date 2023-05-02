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

// Initialiser l'index de la diapositive actuelle à 0
let currentSlideIndex = 0;

// Ajouter un événement de clic à la flèche gauche
arrowLeft.addEventListener("click", function(){
	console.log("La flèche gauche a été cliqué !");
	console.log(currentSlideIndex);
});

// Ajouter un événement de clic à la flèche droite
arrowRight.addEventListener("click", function(){
	console.log("La flèche droite a été cliqué !");
	console.log(currentSlideIndex);
});


