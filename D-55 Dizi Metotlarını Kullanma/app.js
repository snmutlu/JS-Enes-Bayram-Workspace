//? Dizi Metotlarını Kullanma


let arabalar = ["bmw","toyota","renault","mercedes","porsche"];


//! 1-Push Metot

// Dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.

// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);
// console.log(arabalar.length);

//! 2-Unshift Metot

// Dizinin başına eleman eker, ayrıca dizinin uzunluğunu döner.

// arabalar.unshift("Hyundai");
// console.log(arabalar);

//! 3-Pop Metot

// Dizinin sonundan eleman siler ve silinen elemanı string veri tipinde geri döner.

// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

//! 4-Shift Metot

// Dizinin başından eleman siler ve silinen elemanı string veri tipinde geri döner.

// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

//! 5-Splice Metot

// Eleman eklemek ve silmek için kullanılır.

//* Eklemek

// console.log(arabalar);
// arabalar.splice(0,0,"Hyundai");
// console.log(arabalar);

// Biz burada arabalar dizisinin 0. indexinden başla, dizinin içerisinden hiçbir şey silme ve "Hyundai" elemanını diziye ekle demiş oluyoruz. Splice metotu bu işe yarıyor. Ayrıca biz başlangıç indexini değiştirerek ekleyeceğimiz elemanı dizi içerisinde nereye ekleyeceğimizi de kontrol edebiliyoruz.

//* Silmek

// console.log(arabalar);
// arabalar.splice(1,2);
// console.log(arabalar);

// Burada ise arabalar dizisinin 1. indexinden başla, dizinin içerisinden 2 tane eleman sil demiş olduk.

//* Hem silip hem eklemek

// console.log(arabalar);
// arabalar.splice(2,3,"Ferrari");
// console.log(arabalar);

// Burada ise arabalar dizisinin 2. indexinden başla ve dizi içerisinden 3 tane eleman sil ardından "Ferrari" elemanını dizi içerisine ekle demiş olduk.

//! 6-Tostring Metot

// Diziyi stringe çevirmek için kullanılır.

// console.log(arabalar); // Burada object veri tipinde
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString(); // Tostring metotu ile çevirdik
// console.log(stringArabalar); // Burada string veri tipinde
// console.log(typeof stringArabalar);

//! 7-Join Metot

// Diziyi stringe çevirir, farkı ise araya eleman ekleyebiliriz

// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);

// Burada her dizi elemanının arasına yazdığımız elemanı string tipinde eklemiş oluyoruz.

//! 8-Concat Metot

// Dizileri birleştirmek için kullanılır

// let dizi1 = ["Şahin","Doğan","Tofaş"];
// let dizi2 = ["Ferrari","Porsche","Nissan"];

// let birlesmisDizi = dizi1.concat(dizi2);
// console.log(birlesmisDizi);

// dizi1 ve dizi2 yi birleştirip birleştirilmiş bir şekilde console'a yazdırmış olduk.

//! 9-Slice Metot (Dilimlemek)

// Diziyi istenilen yerden bölüp yeni bir dizi oluşturur

// console.log(arabalar);
// let bölünenDizi = arabalar.slice(3);
// console.log(bölünenDizi);

// Dizinin üçüncü indexinden bölüp geri kalan elemanlarla yeni bir dizi oluşturmuş olduk.

//! 10-Length Metot

// Dizinin uzunluğunu verir

// console.log(arabalar.length);

//! 11-Reverse Metot;

// Dizinin elemanlarını ters çevirir ve orjinal halini bozar

// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

// Dizi elemanlarını ters çevirdik ve yazdırmış olduk.

//! 12-Split Metot (Bölmek)

// Belirli bir ifadeye göre ayırıp diziye çevirir

// let isimler = "Enes,Ali,Veli";
// console.log(isimler);
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);
// console.log(typeof isimlerDizi);

// Burada virgülü hedef göstererek string tipindeki ifademizden virgülleri kontrol ederek isimleri dizi elemanı olarak atadık. Yani isimleri virgüle göre ayır bunu da bana bir dizi olarak geri dön demiş olduk.

//! 13-Indexof Metot

// Elemanın index numarasını verir

// let donus = arabalar.indexOf("porsche");
// console.log(donus);

// Burada string tipinde aradığımız elemanımızın dizi içerisinde bize hangi indexte olduğunu geri döndermiş olduk.

//! 14-Includes Metot

// Verilen eleman dizi içerisinde var mı, yok mu kontrol eder

// let sonuc = arabalar.includes("bmw");
// console.log(sonuc);

// if(sonuc){
//     console.log("Eleman vardır");
// }
// else{
//     console.log("Eleman yoktur");
// }

// String veri tipinde yazmış olduğumuz eleman dizi içerisinde var mı yok mu kontrol eder ve bize varsa true yoksa false olarak geri dönüş yapar.

// Bu dönüşlerle yukarıdaki gibi işlemler yapabiliriz.

