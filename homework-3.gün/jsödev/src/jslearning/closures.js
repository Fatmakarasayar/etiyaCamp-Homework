// var counter=0; //global scope
// function add(){
//     var counter=0;
//     counter +=1;
//     return counter;
// }

// function someOtherFunction(){
//     counter +=10;
// }


//functıon closures
var add = (function() {
    var counter=0;
    return function(){
        return counter +=1;
    }
})(); 

//fonk bır kere calsıyor.