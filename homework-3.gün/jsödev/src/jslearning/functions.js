// fonksiyon imzası

function functionName(parameter1, parameter2) {

    //Bir şey yap 2 ve 3 çarp
    return parameter1 * parameter2;

}
//2 ve 3 çarp
alert(functionName(2,3));

//işlevsiz "return"

function functionWithOutReturn(parameter1,parameter2) {
    alert("This is a function without 'return' statement");   
}
//mesaj veriyoruz. parametrelerle eşleşiyor.
functionWithOutReturn(2,3,4);

//parameter Defaults

function functionName2(x,y) {
    if (y === undefined) {
        y = 0;
    }
}
functionName2(3,4);


//the Arguments Object 
x = findMax(1, 123, 500,115,44, 88);

function findMax() {
    var i,max = 0;
    for (i= 0 ; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }

    }
   return max;
}