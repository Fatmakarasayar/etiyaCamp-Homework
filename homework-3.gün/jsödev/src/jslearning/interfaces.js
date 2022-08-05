function sendEmail(personInterface){
    var to = personInterface.eMail;
    var name= personInterface.name;

    var send=function(){
        alert("Mail sent to : " + name + "/" + to);
    }
    
    send();
}

//somut bır sınıf
function Customer(name,eMail){
    this.name=name;
    this.eMail=eMail;
}

var someCustomer= new Customer("engfin","engin@goliq.net");
sendEmail(someCustomer)