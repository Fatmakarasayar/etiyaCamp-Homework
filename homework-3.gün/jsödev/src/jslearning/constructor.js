//this in a function inside an object
var student={
    firstName: "Fatma",
    lastName: "Karasayar",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
alert(student.fullName());

//Object constructor

//this in an object

function Customer(first, last, city, country, age){
    this.first=first;
    this.last=last;
    this.city=city;
    this.country=country;
    this.age=age;
}
var someCustomer =new Customer("Fatma", "Karasayar", "Ankara", "Turkey", 25);
alert(someCustomer.country);