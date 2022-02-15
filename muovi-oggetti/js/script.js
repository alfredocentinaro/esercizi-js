function destra()
{
    let objBlocco = document.getElementById("blocco");

    let posizioneBlocco = objBlocco.offsetLeft;

    objBlocco.style.left = posizioneBlocco + 50 + "px";

}

function sinistra()
{
    let objBlocco = document.getElementById("blocco");

    let posizioneBlocco = objBlocco.offsetLeft;

    objBlocco.style.left = posizioneBlocco - 50 + "px";

}

function nascondi()
{
    let objBlocco = document.getElementById("blocco");

    objBlocco.style.display = "none";
 
}

function mostra()
{
    let objBlocco = document.getElementById("blocco");

    objBlocco.style.display = "block";
 
}
