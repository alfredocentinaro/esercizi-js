class Prodotto 
{
	constructor(_codice, _nome, _descrizione, _prezzo) 
    {
		this.codice = _codice;
		this.nome = _nome;
		this.descrizione = _descrizione;
		this.prezzo = _prezzo;
        this.giacenza = 0;
    } 


	getCodice()
    {
        return this.codice;
    }

	setCodice(_codice)
    {
        this.codice = _codice;
    }

    getPrezzo()
    {
        return this.prezzo;
    }

	setPrezzo(_prezzo)
    {
        this.prezzo = _prezzo;
    }

    toString() 
    {
		return this.codice + " " + this.nome + " " + this.descrizione + " " + this.prezzo + " " + this.giacenza;
	}

    visualizza(_objTabella)
    {
        let tr= document.createElement("tr");
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        let contenutotd1=document.createTextNode(this.codice);
        let contenutotd2=document.createTextNode(this.nome);
        let contenutotd3=document.createTextNode(this.descrizione);
        let contenutotd4=document.createTextNode(this.prezzo);
        let contenutotd5=document.createTextNode(this.giacenza);

        td1.appendChild(contenutotd1);
        td2.appendChild(contenutotd2);
        td3.appendChild(contenutotd3);
        td4.appendChild(contenutotd4);
        td5.appendChild(contenutotd5);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);        

        _objTabella.appendChild(tr);

    }
}
