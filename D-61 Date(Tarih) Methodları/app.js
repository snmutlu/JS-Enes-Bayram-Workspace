//? Date Kullanımı

let tarih = new Date(); // Burada Date methodu içerisine herhangi bir parametre girmezsek şu anın tarihini kullanmış oluruz.
console.log(tarih);

//! Eğer biz tarihi kendi seçtiğimiz bir tarih olarak ayarlamak istiyorsak şu şekilde bir kullanım yapabiliriz;

let yeniTarih = new Date(1994,8,26,10,40,50);
console.log(yeniTarih);

//! Get(Çağırma) Metotları

// Tarih ile ilgili herhangi bir değeri çağırmak için kullanılır.(Gün,Ay,Yıl,Dakika,Saniye,Haftanın Günü vs.)

// console.log(tarih.getFullYear()); // Tarihin yılını alır.
// console.log(tarih.getDate()); // Ayın gününü alır.
// console.log(tarih.getDay()); // Haftanın gününü alır.
// console.log(tarih.getHours()); // Saati alır.
// console.log(tarih.getMilliseconds()); // Milisaniyeyi alır.
// console.log(tarih.getMinutes()); // Dakikayı alır.
// console.log(tarih.getSeconds()); // Saniyeyi alır.
// console.log(tarih.getMonth()); // Ayı alır. Ayların numaralandırması 0 dan başlar. Örn; Eylül 9. ay değil 8. ay olarak görünür.
// Bunu düzeltmek için metot sonuna +1 ekleyebiliriz.
// console.log(tarih.getMonth()+1);

//! To Metotları

// Tarihi string olarak yazdırmak için kullanılır.

// console.log(tarih.toLocaleDateString()); // Gün ay yılı string olarak verir.
// console.log(tarih.toLocaleTimeString()); // Saat dakika saniyeyi string olarak verir.
// console.log(tarih.toLocaleString()); // Gün ay yıl + saat dakika saniyeyi string olarak verir.

//! Set(Yeni değer verme) Metotları

// Mevcut tarihe, saate, dakikaya vs yeni değerler atamak için kullanıır.

// console.log(tarih);
// tarih.setDate(25); // Vermiş olduğumuz gün sayısını tarihimize atar.
// console.log(tarih);

// console.log(tarih);
// tarih.setHours(22); // Vermiş olduğumuz saat sayısını tarihimize atar.
// console.log(tarih);

// console.log(tarih);
// tarih.setMonth(9); // Vermiş olduğumuz ay sayısını tarihimize atar.
// console.log(tarih);

// Örneğin biz değerlerimize statik değerler atamak yerine daha dinamik değerler atamak istersek şu anki gün saat dakika üzerinden +2 saat ata gibi işlemler yapabiliriz.
// console.log(tarih);
// tarih.setHours(tarih.getHours()+2); // Burada .getHours methodu ile saati aldık ve 2 saat ekle sonucunu .setHours methodu ile tarih değişkenine ekle demiş olduk.
// console.log(tarih);


