class Movimenti 
{
    
	constructor() 
    {
        this.movimenti = [];
    }

    
    aggiungi(_movimento)
    {
        this.movimenti.push(_movimento);
        return _movimento;
    }

    elimina(_id)
    {
        for( let i = 0; i < numMovimenti(); i++)
        { 
            if ( this.movimenti[i].id() == _id) 
            {
                this.movimenti.splice(i, 1); 
            }
        }
    }

    numMovimenti()
    {
        return this.movimenti.length;
    }

    visualizza(_objTabella) 
    {
        _objTabella.innerHTML = ""; //resetto la tabella e ridisegno 

        let stringa;
        this.movimenti.forEach(element => {
            element.visualizza(_objTabella);
        });
        
        //console.log(stringa);
		//return stringa;
	}

    visualizzaPerProdotto(_codprodotto, _objTabella) 
    {
        _objTabella.innerHTML = ""; //resetto la tabella e ridisegno 

        for( let i = 0; i < this.numMovimenti(); i++)
        { 
            if ( this.movimenti[i].codiceprodotto == _codprodotto) 
            {
                this.movimenti[i].visualizza(_objTabella);
            }
         }
	}

    save() 
    {
        localStorage.setItem('movimenti', JSON.stringify(this.movimenti))
    }

    load() 
    {
        let jsonMovimenti = localStorage.getItem("movimenti");
        let data  = JSON.parse(jsonMovimenti);
        if (data == null)
            return;
        for (let movimentoData of data) {
          let movimento = new Movimento(
            movimentoData.id,
            movimentoData.codiceprodotto,
            movimentoData.data,
            movimentoData.qta
          );
          this.aggiungi(movimento);
        }
    }
}
