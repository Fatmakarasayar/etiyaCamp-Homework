function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
} 

function Student(favoriteCourse){
    this.favoriteCourse=favoriteCourse;
}

//miras işlemleri
Student.prototype=new Person("Engin", "Demiroğ");

//yeni nesne olusturma
var engin=new Student("Programming");

alert(engin.firstName+ " " + engin.lastName + " loves" + engin.favoriteCourse);