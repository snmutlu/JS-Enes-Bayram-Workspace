//? Tür Dönüşümü-Type Conversion

/*
!-Veri Tipleri

Primitive veri tipleri: Strings, numbers, booleans, undefined, null
Gelişmiş veri tipleri: Object, function

*/

//?String veri tipinden number veri tipine çevirme.

//!Number ile çevirme

// let a = 5;
// let b = Number("10");
// console.log(a+b);

//Ayrıca b değişkeninin değerini başka bir değişkene atayarakta tür dönüşümü
//yapabiliriz. Örn;

// let c = Number(b);
// console.log(a+c);


//! parseInt() methodu ile de string tipini number'a çevirebiliriz.
//! parseInt() methodu küsürlü işlemleri tam sayıya çeviriyor

// let a = 8;
// let b = parseInt("12");
// console.log(a+b);

//! parseFloat() methodu ile de string tipini number'a çevirebiliriz.
//! parseFloat() kesirli, virgüllü Örn:("12.5") sayıların tür dönüşümleri için kullanılabilir

// let a = 4;
// let b = parseFloat("12.5");
// console.log(a+b);

//? Number veri tipinden string veri tipine çevirme.
//? Önemli not: Sayı, rakam şeklinde olmayan (harf vb) değerleri biz number veri
//? tipine çeviremeyiz.

//!String methodu ile çevirme

// let x = String(55);
// console.log(typeof x);
// console.log(x);

//!.toString() methodu ile çevirme

// let x = (55).toString();
// console.log(typeof x);
// console.log(x);

//? Boolean veri tipinden string veri tipine çevirme.

// let sonuc = String(true);
// console.log(typeof sonuc);
// console.log(sonuc);

//? Object veri tipinden string veri tipine çevirme.

// let rakamlar = String([1,2,3,4]);
// console.log(typeof rakamlar);
// console.log(rakamlar);







123123213