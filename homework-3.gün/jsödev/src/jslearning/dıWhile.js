var age = prompt("your age?");
var result = "";
//şart sağlansada sağlanmasada çalışacaktır.
do {
    result += age;
    result += "-";
    age--;

} 
while (age > 0)
alert(result);
