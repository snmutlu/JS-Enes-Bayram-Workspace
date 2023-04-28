/*

? MANTIKSAL OPERATÖRLER

    && : VE
    
    || : VEYA

    !  : DEĞİL

*/

//! && : VE Operatörü

// Birden çok ihtimal veya koşulun hepsinin sağlanmasının gerektiği operatördür. 
//Örn; Ehliyet almak için şartlar

// Yaşınız 18' den büyük olmalı VE 3000 tl para olması VE sağlığınız yerindeyse

// let yas = 20;
// let para = 3500;
// let saglikliMi = false;

// console.log(yas>18 && para>3000 && saglikliMi==true);

//! || : VEYA Operatörü
// Birden çok ihtimal veya koşulun herhangi birinin sağlanmasının yeterli olduğu operatördür.
//Örn;

// console.log(5>3 || 7<3); // Burada 5 - 3' ten büyüktür veya 7 - 3' ten küçüktür demiş olduk

// 5-3' ten büyük olduğu için operatörümüz bize çıktı olarak true sonucunu verecektir.

//! ! : DEĞİL Operatörü

// Birşeyin zıttını almak için kullanılır. True olan sonucu false'a false olan sonucu da
// true'ya çevirir.

// Örn;

// let yas = 20;
// console.log(!(yas>10));

// Burada yaş değerimiz 10' dan büyük olmasına rağmen !(DEĞİL) Operatörünü kullandığımız
// için false sonucunu alırız.

//TODO: Bütün operatörlerin kullanıldığı genel örnek;

let yas = 20;
let para = 3500;
let saglikliMi = false;
let hakSayisi = 3;

console.log((para>3000 && !(hakSayisi>4)) || (yas>18 && saglikliMi) )
//                     VE DEGIL          VEYA        VE

// Burada para 3000'den büyükmü VE haksayisi 4'den fazla mı VEYA yaşı 18'den büyük mü ve sagliklimi demiş olduk






