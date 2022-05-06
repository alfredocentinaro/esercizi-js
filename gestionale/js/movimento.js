var id = 0;

class Movimento 
{
	constructor(_id, _codiceprodotto, _data, _qta) 
    {
		this.id = _id == "" ? id++ : _id;
		this.codiceprodotto = _codiceprodotto;
		this.data = _data;
		this.qta = _qta;
    } 

    getid()
    {
        return this.codice;
    }
	
    setid(_id)
    {
        this.codice = _id;
    }
    
    toString() 
    {
		return this.id + " " + this.codiceprodotto + " " + this.data + " " + this.qta;
	}

    visualizza(_objTabella)
    {
        let tr= document.createElement("tr");
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        let contenutotd1=document.createTextNode(this.id);
        let contenutotd2=document.createTextNode(this.codiceprodotto);
        let contenutotd3=document.createTextNode(this.data);
        let contenutotd4=document.createTextNode(this.qta);


        td1.appendChild(contenutotd1);
        td2.appendChild(contenutotd2);
        td3.appendChild(contenutotd3);
        td4.appendChild(contenutotd4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
      

        _objTabella.appendChild(tr);

    }
    
}