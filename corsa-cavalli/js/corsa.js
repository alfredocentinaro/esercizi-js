function corriSemplice()
{

//Prelevo gli oggetti dalla pagina HTML
var cavallo1 = document.getElementById("cavallo1");
var cavallo2 = document.getElementById("cavallo2");
var cavallo3 = document.getElementById("cavallo3");

//In che posizione iniziale si trovano?
var posizione1 = cavallo1.offsetLeft; 
var posizione2 = cavallo2.offsetLeft;
var posizione3 = cavallo3.offsetLeft;

//Calcolo uno spostamento per ogni cavallo con la funzione random
var spostamento1 = Math.floor((Math.random() * 100) + 1);
var spostamento2 = Math.floor((Math.random() * 100) + 1);
var spostamento3 = Math.floor((Math.random() * 100) + 1);

//Aggiorno la posizione dei cavalli
cavallo1.style.left = posizione1 + spostamento1 + "px";
cavallo2.style.left = posizione2 + spostamento2 + "px";
cavallo3.style.left = posizione3 + spostamento3 + "px";

//Completare: come faccio a far vedere chi vince?
//Suggerimento: piazzo un oggetto/contenitore in posizione assoluta ad es. a 1000px e...

var posizione1 = cavallo1.offsetLeft;
var posizione2 = cavallo2.offsetLeft;
var posizione3 = cavallo3.offsetLeft;

if (posizione1 >= 1000)
	alert("Cavallo 1 vince")

if (posizione2 >= 1000)
	alert("Cavallo 2 vince")

if (posizione3 >= 1000)
	alert("Cavallo 3 vince")

}
