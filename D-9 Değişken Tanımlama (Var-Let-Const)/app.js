// Var-Let-Const

// Değişken nedir?
/* Değişkenler içerlerinde değerler sakladığımız kovalardır
gibi düşünebiliriz.

var/let/const-degiskenismi = degiskendeğeri;
örn: let sayi = 10;
*/

// Var = Function Scope (Ram bellekte çok fazla yer kaplar)

function selamVer() {
    var selam = "Herkese selam";
    if (true) {
        var b = 10; // Burada block scope olarak yazılsa da var kullanıldığı için function scope oluyor
    }
    console.log(selam);
    console.log(b);
}
selamVer();

// Let - Const = Block scope özelliğine sahiptir
// Örn:
function selamAl() {
    let selam = "merhaba";
    if (true) {
        const b = 3; // Burada const veya let kullandığımız için block scope özelliğinden faydalanabiliyoruz
        console.log(b);
    }
    console.log(selam);

}
selamAl();

/*Biz var değişkeni kullandığımızda aynı değişken ismine birden fazla değer atayabiliyorken
let ve const kullandığımızda aynı işlemi yapamıyor sadece tek bir değer atayabiliyoruz.
Örn: */

var a = 5;
var a = 8;
console.log(a);

// let c = 1;
// let c = 2;
// console.log(c); // Bu bölümde let kullandığımız için hata alırız.

// Let ve Const Farkları

//Biz const ile bir değişken atadığımızda bu değişkenin değeri asla değiştirilemiyor

// const x = 8;
// x = 9;
// console.log(x);

// Ancak biz aynı işlemi let ile yaptığımızda herhangi bir hata almıyoruz

let x = 8;
x = 9;
console.log(x);



const user = {
    username : "Mutlu",
    password : "123"
}
user.username="Mutlu SENEM";

console.log(user);









