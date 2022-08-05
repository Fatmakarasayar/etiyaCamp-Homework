var customer = {
    id: 1,
    concantName:"Fatma Karasayar"
}

customer.country = "Turkey";

customer.sayHello = function () {
    alert(" Merhaba " + this.concantName);
//this = bu fonksiyonu barındıran nesne 
}

customer.sayHello();