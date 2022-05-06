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
  * Funzioni associate agli eventi prodotto
  */
function aggiungiprodotto()
{
    let codice = document.querySelector("#codice").value;   
    let nome = document.querySelector("#nome").value;  
    let descrizione = document.querySelector("#descrizione").value;  
    let prezzo = parseFloat(document.querySelector("#prezzo").value); 
    let prodotto = new Prodotto(codice,nome, descrizione,prezzo);
    prodotti.aggiungi(prodotto);

    visualizzaprodotti();
}

function eliminaprodotto()
{
    let codice = document.querySelector("#codice-elimina").value; 
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
    let objInfo = document.querySelector("#info");
    let stringa = prodotti.prodottoprezzomax();
    objInfo.innerHTML = "Prodotto prezzo MAX: " + stringa;
}

function caricaprodotti()
{
    prodotti.load();
    visualizzaprodotti();
}

function salvaprodotti()
{
    prodotti.save();
}





/**
 * Pulsanti Gestione Movimenti
 */
 var objBtnAggiungiMovimento  = document.querySelector("#btn-aggiungi-movimento");
 var objBtnTuttiMovimenti     = document.querySelector("#btn-tutti-movimenti");
 var objBtnMovimentiProdotto  = document.querySelector("#btn-movimenti-prodotto");
 var objBtnCaricaMovimenti    = document.querySelector("#btn-carica-movimenti");
 var objBtnSalvaMovimenti     = document.querySelector("#btn-salva-movimenti");
 
 /**
  * Eventi Gestione Movimenti
  */
  objBtnAggiungiMovimento.addEventListener("click",aggiungimovimento);
  objBtnTuttiMovimenti.addEventListener("click",visualizzamovimenti);
  objBtnMovimentiProdotto.addEventListener("click",visualizzamovimentiprodotto);
  objBtnCaricaMovimenti.addEventListener("click",caricamovimenti);
  objBtnSalvaMovimenti.addEventListener("click",salvamovimenti);

/**
 * Funzioni associate agli eventi movimento
 */
 function visualizzamovimenti()
 {
     let objTabellaMovimenti = document.querySelector("#tabella-movimenti tbody");
     movimenti.visualizza(objTabellaMovimenti);
 }


 function aggiungimovimento()
 {
    let codice = document.querySelector("#codice-prodotto").value;   
    let data = document.querySelector("#data-movimento").value;  
    let qta = parseFloat(document.querySelector("#quantita").value);  

    if (prodotti.esiste(codice) == true)
    {
        movimenti.aggiungi(new Movimento("",codice,data,qta));
        prodotti.aggiornaGiacenza(codice,qta);
        visualizzamovimenti();
        visualizzaprodotti(); //aggiorna visualizzazione giacenza
    }

 }

 function visualizzamovimentiprodotto()
 {
    let codice = document.querySelector("#filtro-codice-movimento").value;   
    let objTabellaMovimenti = document.querySelector("#tabella-movimenti tbody");
    movimenti.visualizzaPerProdotto(codice,objTabellaMovimenti);    

 }

 function caricamovimenti()
{
    movimenti.load();
    visualizzamovimenti();
}

function salvamovimenti()
{
    movimenti.save();
}