class Movimento 
{
	constructor(_id, _codiceprodotto, _data, _qta) 
    {
		this.id = _id;
		this.codiceprodotto = _codiceprodotto;
		this.data = _data;
		this.qta = _qta;
    } 

    get getid()
    {
        return this.codice;
    }
	set setid(_id)
    {
        this.codice = _codice;
    }
    
    toString() 
    {
		return this.id + " " + this.codiceprodotto + " " + this.data + " " + this.qta;
	}
}