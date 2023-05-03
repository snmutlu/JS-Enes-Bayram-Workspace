//? DİALOG KUTULARI

/*

-Alert
-Prompt
-Confirm

*/

// console.log(window);

// window.confirm()

// Eğer bir method-bir özellik window objesi içerisinde tanımlanmışsa başına
// window yazmadan da bu fonksiyonlara ve bu değişkenlere erişebiliriz

// Örn; confirm()

//! Alert
// Alert'ler uyarı, karşılama mesajı vs gibi pop up'lar için sıklıkla kullanılabilir.

alert("Hoşgeldiniz");

//! Prompt
// Kullanıcıdan değer almamızı sağlayan methoddur. Kullanıcıdan bir mesaj alır ve geriye
// string olarak döndürür.

// Örn;

// let isim = prompt("İsminizi giriniz:");

// console.log(isim);
// console.log(typeof isim);

// Prompt ile alınan değerleri kullanıcı ne ile yazarsa yazsın number olarak yazsa bile bize string olarak geri döner.

// Örn;

// let isim = prompt("İsminizi giriniz:");

// let yas = prompt("Yaşınızı giriniz:");

// console.log("İsminiz:" + isim);
// console.log("Yaşınız:" + yas);

// console.log(typeof isim);
// console.log(typeof yas);

// Burada iki değişkenimizin de değeri string veri tipinde karşımıza çıkacaktır.
// Kullanıcıdan alınan değerler her zaman string olarak döner.

//! Confirm
// Onaylamak anlamına gelir. Mesaja verilen cevabı true veya false olarak geri çevirir.

// Örn;

let sonuc = confirm("Silmek istediğinize emin misiniz?");

console.log(sonuc);

// Kullanıcının onayını almak için vs kullanılır. Kullanıcı tamam'a bastıysa True,
// iptale bastıysa false döner.








