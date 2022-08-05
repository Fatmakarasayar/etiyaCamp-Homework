//function kendini tekrar etme. değişiklik yapacaüğın zaman defalarca farklı yerden değişiklik yapıyorsun.
// console.log("sepete ekle")

// console.log("sepete ekle")

// console.log("sepete ekle")

// console.log("sepete ekle")

function addToCart(productName="Elma", quantity) {
    console.log("sepete eklendi :   ürün : " + productName + " adet : "+ quantity)

} 

// addToCart()
addToCart()
// addToCart(15)


let sayHello = ()=>{
    console.log("hello world")

}

sayHello()
//klasik fonksiyonu değişkene atama:

let sayHello2 = function () {
    console.log("hello world 2 ")
}
sayHello2();

//ürün ismi adeti sepete ekle

function addToCart2(productName, quantity, unitprice) {
         
}

addToCart2("elma",2,15)
addToCart2("armut",2,15)
addToCart2("karpuz",2,15)

// /fonksiyon kullanarak ürünleri çağırma


let product1 = {productName:"elma", unitprice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Fiyat: "+product.unitprice)
    console.log("Adet : "+product.quantity)
}
//obje rotasyonu

addToCart3(product1)
//obje ise referans tip
let product2 = {productName:"muz", unitprice:23, quantity:5}
let product3 = {productName:"muz", unitprice:23, quantity:5}
product2 = product3
product2.productName = "karpuz"


// değertip:sayısal olanlar
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"muz", unitprice:23, quantity:5},
    {productName:"muz", unitprice:23, quantity:5},
    {productName:"muz", unitprice:23, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) { 
        console.log(numbers[i])
        
    }
    console.log(total)
    console.log(bisey)
    
}
add(20,30)
// add(20,30,50)
// add(20,30,50,60)

let numbers = getNumbers
console.log(Math.max(30,10,500,600,670))







