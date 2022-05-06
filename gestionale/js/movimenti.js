class Movimenti 
{
	constructor() 
    {
        this.movimenti = [];
    }

    
    aggiungi(_id, _codiceprodotto, _data, _qta)
    {
        let m = new Movimento(_id, _codiceprodotto, _data, _qta)
        this.movimenti.push(m);
        return m;
    }

    elimina(_id)
    {
        for( let i = 0; i < numMovimenti(); i++)
        { 
            if ( this.movimenti[i].id() === _id) 
            {
                this.movimenti.splice(i, 1); 
            }
        }
    }

    get numMovimenti()
    {
        return this.movimenti.length;
    }

    visualizza() 
    {
        let stringa;
        this.movimenti.forEach(element => {
            stringa += element.visualizza() + "\n";
        });
        
        //console.log(stringa);
		return stringa;
	}

    caricadadisco(_file)
    {

    }
}