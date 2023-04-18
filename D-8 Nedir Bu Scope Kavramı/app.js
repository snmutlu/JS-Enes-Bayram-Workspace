// Var - Let - Const


/* 
SCOPE (KAPSAM)

>Global Scope
>Function Scope
>Block Scope

*/

// var degiskenismi = 10;

// console.log(degiskenismi);


// >Global Scope
/* Global scope'da tanımladığınız değişken herhangi
bir kıvırcık parantez içerisinde olmamalı */

// var a = 5; 

//Sen bu yukarıdaki değişkene her yerden erişebilirsin

// if(true){
//     console.log(a)
// }

/* Örneğin buradaki if kıvırcık parantezleri içerisinde
biz a değerine erişebildik */

// >Function Scope

function method1(){
    var sayi=10;
    console.log(sayi);
}

method1();

/* Function scope = Eğer biz bir function içerisindeki
kıvırcık parantezler içerisinde bir değişken oluşturursak
bu değişkenlere sadece o kıvırcık parantezlerin içerisinde
erişip yazdırabiliyoruz. Eğer o kıvırcık parantezlerin
dışarısında bu değişkenlere erişmek istersek hata alırız*/

// Örn;
// Burada sayi is not defined hatası alırız
// function method2(){
//     var sayi=2;
// }
// console.log(sayi);
// method2();

// >Block Scope

function method3(){
    var a = 5;  // Function scope
    if(true){
        var b = 10;  //Block scope
        console.log(b);
    }
    while(true){

    }
}



