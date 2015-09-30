/*pas inladen als alles is gedownload... javascript header*/
onload = function(){
	/*menu(nav) zoeken met queryselector in de header die een direct kind is van de body*/
	var hetMenu = document.querySelector("body > header nav");
/* als er op het menu geklikt wordt, dan wordt de functie menuToggle uitgevoerd... voegt 
event click toe, als erop geklikt wordt dan gaat hij menutoggle doen dan voert hij die dingen 
eronder uit.*/
hetMenu.addEventListener("click", menuToggle);
}

// selecteer de fieldset die we aan en uit willen zetten
var fieldset3 = document.querySelector('fieldset:nth-of-type(3)'),
	fieldset4 = document.querySelector('fieldset:nth-of-type(4)');

// hide deze fieldset
fieldset3.classList.add('is-invisible');
fieldset4.classList.add('is-invisible');

// select first radio button you can find
document.querySelector('input[type="radio"]').onclick = function() {
	fieldset3.classList.remove('is-invisible');
	fieldset4.classList.add('is-invisible');
};

// select last radio button you can find
document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
	fieldset3.classList.add('is-invisible');
	fieldset4.classList.remove('is-invisible');
};

function menuToggle(){
	/*body element zoeken met Queryselector - er is er maar 1*/
	var deBody = document.querySelector("body");

	/* aan het classlist object van de body (overzicht van de klassen van het body element)
	.. de klas "navigatie toevoegen of wehalen met toggle - add/remove gecomineerd)*/

/*als die er is dan voegt ie m toe, als ie niet bestaat dan niet zelfde als if*/
deBody.classList.toggle("navigatie");


/* even kijken of het gelukt is*/
console.log(deBody.classList);

}