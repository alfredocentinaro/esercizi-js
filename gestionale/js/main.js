/**
 * Istanze gestionale
 */

var prodotti    = new Prodotti();
var movimenti   = new Movimenti();

/**
 * Pulsanti Gestione Prodotti
 */
var objBtnAggiungiProdotto  = document.querySelector("#btn-aggiungi-prodotto");
var objBtnEliminaProdotto   = document.querySelector("#btn-elimina-prodotto");
var objBtnTuttiProdotti     = document.querySelector("#btn-tutti-prodotti");
var objBtnPrezzoMax         = document.querySelector("#btn-prezzo-max");
var objBtnCaricaProdotti    = document.querySelector("#btn-carica-prodotti");
var objBtnSalvaProdotti     = document.querySelector("#btn-salva-prodotti");

/**
 * Eventi Gestione Prodotti
 */
 objBtnAggiungiProdotto.addEventListener("click",aggiungiprodotto);
 objBtnEliminaProdotto.addEventListener("click",eliminaprodotto);
 objBtnTuttiProdotti.addEventListener("click",visualizzaprodotti);
 objBtnPrezzoMax.addEventListener("click",visualizzaprezzomax);
 objBtnCaricaProdotti.addEventListener("click",caricaprodotti);
 objBtnSalvaProdotti.addEventListener("click",salvaprodotti);

 /**
  * Funzioni associate agli eventi
  */
function aggiungiprodotto()
{
    let codice = document.querySelector("#codice").value;   
    let nome = document.querySelector("#nome").value;  
    let descrizione = document.querySelector("#descrizione").value;  
    let prezzo = parseFloat(document.querySelector("#prezzo").value); 
    //let giacenza = parseInt(document.querySelector("#giacenza").value);       
    let prodotto = new Prodotto(codice,nome, descrizione,prezzo);
    prodotti.aggiungi(prodotto);

    visualizzaprodotti();
}

function eliminaprodotto()
{
    let codice = document.querySelector("#codice").value; 
    prodotti.elimina(codice);
    visualizzaprodotti();
}

function visualizzaprodotti()
{
    let objTabellaProdotti = document.querySelector("#tabella-prodotti tbody");
    prodotti.visualizza(objTabellaProdotti);
}

function visualizzaprezzomax()
{
    
}

function caricaprodotti()
{
    prodotti.load();
}

function salvaprodotti()
{
    prodotti.save();
}




/**
 * Pulsanti Gestione Movimenti
 */