function gioca()
{
    let objNum = document.getElementById("num");
    let objSoglia = document.getElementById("soglia");

    let num = objNum.value;
    let soglia = objSoglia.value;

    let vettore = new Array();

    for (let i=0; i < num; i++)
    {
        vettore[i]= parseInt(prompt("Inserisci un elemento"));
    }

    let maggiori=0;
    let minori =0;

    for (let i=0; i < num; i++)
    {
        if (vettore[i] > soglia)
            maggiori = maggiori + 1;
        else
            minori = minori + 1;    
    }    

    let objMaggiori = document.getElementById("maggiori");
    objMaggiori.innerHTML = "Valori maggiori " + maggiori;
    objMaggiori.style.color = "blue";
    objMaggiori.style.fontSize = "2em";
    objMaggiori.style.fontWeight = "bold";

    document.getElementById("minori").innerHTML = "Valori minori " + minori;
    
}
