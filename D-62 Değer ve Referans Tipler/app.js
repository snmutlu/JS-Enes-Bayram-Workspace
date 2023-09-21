//? Değer ve Referans Tipler

//! 1- İlkel-Değer(Primitive) Tipli Veri Türleri

// a-String
// b-Number
// c-Boolean
// d-Undefined
// e-Null
// f-Symbol

//! 2- İlkel Olmayan(Referance) Tipli Veri Türleri

// a-Object
// b-Array
// c-Function

//Todo Primitive ve Referance veri tipleri arasındaki farklar nelerdir bakalım:

//! Burada oluşturduğumuz değişkenler number yani primitive veri tiplidir.

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// console.log("-------------------------");

// b = 10;
// console.log(a);
// console.log(b);

// Bizler bir değişkeni tanımladığımızda ram bellekte iki çeşit bölüm var. Birincisi:  Stack   İkincisi: Hip

// Stack bölümünde primitiv (değer tipli) değişkenlerimiz tutulur.
// Hip bölümünde referance (ilkel olmayan) değişkenlerimiz tutulur.

/* Bu sebeple biz yukarıdaki gibi a değerini b değerine atarsak ve daha sonrasında b değerini değiştirirsek a değeri değişmez. Yani bir değişken üzerinde yaptığımız değişiklik diğerini etkilemez. */

//! Burada oluşturduğumuz diziler object yani referance veri tiplidir.

let dizi1 = [1,2,3];
let dizi2 = [1,2,3];

console.log(dizi1);
console.log(dizi2);

if(dizi1==dizi2){
    console.log("Eşittir");
}
else{
    console.log("Eşit değildir");
}

// Burada iki dizimizde aynı değerleri taşıyor olmasına rağmen biz bir eşitlik sorgulayan if alanı oluşturursak birbirlerine eşit olmadıkları sonucunu alırız. Çünkü iki dizinin de ram bellekte baktıkları yer farklı noktalar olmuş olur.

// Fakat biz dizi değerlerini birbirlerine referans olarak gösterirsek ve o şekilde eşitliklerini sorgularsak eşit olduklarını yani ram bellekte aynı yere baktıklarını görürüz. Örn;

let dizi3 = [9,8,7];
let dizi4 = dizi3;

console.log(dizi3);
console.log(dizi4);

if(dizi3==dizi4){
    console.log("Eşittir");
}
else{
    console.log("Eşit değildir");
}

// Burada eşittir sonucunu alırız.

// Ancak biz dizi4'ün değerini değiştirirsek dizi3'ün de değeri değişir çünkü ram bellekteki adresleri aynıdır. Primitive ve Referans veri tiplerinin en büyük farkı budur. Örn;

dizi4.push(6);

console.log(dizi3);
console.log(dizi4);

// Burada push methodu ile dizi4'e 6 sayısını eklememize rağmen iki dizinin de [9,8,7,6] şeklinde değişmiş olduğunu görürüz. Yani referans tipli veri tiplerinde birbirini referans alan diziler, objeler, functionlar birbirlerinden ve değişen değerlerden etkilenirler.

//! Sonuç olarak Değer(primitive) tipli veri tiplerinde birbirinden referans alan değişkenler değiştiğinde birbirinden etkilenmezken, İlkel olmayan(referance) tipli veri tiplerinde birbirinden referans alan değişkenler değiştiklerinde bütün değişkenler etkilenmiş olur.