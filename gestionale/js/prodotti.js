class Prodotti 
{
	constructor() 
    {
        this.prodotti = [];
    }

    
    aggiungi(_prodotto)
    {
        this.prodotti.push(_prodotto);
        return _prodotto;
    }    

    elimina(_codice)
    {
        for( let i = 0; i < this.numProdotti(); i++)
        { 
            if ( this.prodotti[i].codice == _codice) 
            {
                this.prodotti.splice(i, 1); 
            }
         }
    }

    numProdotti()
    {
        return this.prodotti.length;
    }

    
    visualizza(_objTabella) 
    {
        _objTabella.innerHTML = ""; //resetto la tabella e ridisegno 

        let stringa;
        this.prodotti.forEach(element => {
            stringa += element.visualizza(_objTabella) + "\n";
        });
        
        //console.log(stringa);
		return stringa;
	}

    save() 
    {
        localStorage.setItem('prodotti', JSON.stringify(this.prodotti))
    }

    load() 
    {
        let jsonArticoli = localStorage.getItem("prodotti");
        let data  = JSON.parse(jsonArticoli);
        for (let articoloData of data) {
          let articolo = new Prodotto(
            articoloData.codice,
            articoloData.nome,
            articoloData.descrizione,
            articoloData.prezzo,
            articoloData.giacenza,
          );
          this.aggiungi(articolo);
        }
    }

    prodottoprezzomax()
    {

    }
}