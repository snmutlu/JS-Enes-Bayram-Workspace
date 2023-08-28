//? Geriye Değer Döndüren Method Tanımlamak

// return: Geriye döndürmek


// cube(3);
// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
// }

// console.log(sonuc);

// Bizler function'lar içerisindeki değerlerimize functionlar dışarısında erişemiyoruz. Örneğin yukarıdaki sonuc değerimizi biz function'ımızın kıvırcık parantezleri dışarısında yazdıramıyoruz. Bunun için return anahtar kelimesi kullanabilir ve değerlerimizi istediğimiz yere taşıyabiliriz.

//! 1- Bir değeri methodun dışarısına çıkarmak veya taşımak için kullanılır
//! 2- Bir methodu bitiren anahtar kelimedir ve return anahtar kelimesinden sonraki yazılan hiçbir kod çalışmaz.

//Örneğin bir sayının küpünü alalım ve küpünü aldığımız sayının küpünün karesini alalım




// let donenDeger = cube(Number(prompt("Sayı giriniz")));
// kareAl(donenDeger);



// function kareAl(sayi){
//     let sonuc = sayi*sayi;
//     console.log(sonuc);
// }

// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;
//     console.log(sonuc); // Return'den sonraki hiçbir kod çalışmaz-çıktısı olmaz!
// }


// function yazdir(){
//     console.log("Mutlu");
//     // Void: Geriye değer döndürmeyen demektir.
// }
// yazdir();