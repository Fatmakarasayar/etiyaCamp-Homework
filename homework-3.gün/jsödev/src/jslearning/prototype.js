//prototype nesnelere ek ozellikler vermemizi sağlar.



function Customer(first, last, city, country, age){
    this.first=first;
    this.last=last;
    this.city=city;
    this.age=age;
    this.country=country;

}
var someCustomer = new Customer("Fatma", "Karasayar", "Ankara","Turkey",25);



Customer.prototype.eMail="ftmkrsyr0q@gmail.com";
Customer.prototype.fullName=function(){
    return this.first + " " + this.last;

}


alert(someCustomer.eMail);
alert(someCustomer.fullName);