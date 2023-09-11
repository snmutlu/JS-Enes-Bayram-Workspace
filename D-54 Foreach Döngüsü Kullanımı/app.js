//?Foreach Döngüsü Kullanımı

// For döngüsü, While döngüsü, Dowhile döngüsü görmüştük.

// Foreach : dizilerde kullanıuyoruz

let isimler = ["Mutlu","Selma","Kubi","Ceyda"];

isimler.forEach(function(isim){
    console.log(isim);
});

// Foreach yapısını oluştururken bir callback function oluşturuyoruz ve yukarıdaki isim değişkeni gibi bir değişken oluşturuyoruz. Foreach döngüsü dizinin içerisindeki her bir elemanı her turda belirlediğimiz değişkenin içerisine koyuyor.

// Yukarıda oluşturduğumuz isimler dizisi içerisindeki elemanların her birini console'a yazdırmış olduk. Foreach döngüsü dizi içerisindeki her eleman için dönüyor ve tek tek yazdırıyor.

// Aynı işlemi biz for döngüsü ile de yapabiliriz.

// for(let i=0; i<isimler.length; i++){
//     console.log(isimler[i]);
// }

// Aynı işlemi while döngüsü ile de yapabiliriz.

// let sayac = 0;
// while(sayac<isimler.length){
//     console.log(isimler[sayac]);
//     sayac++;
// }

//! Sonuç olarak foreach döngüsü dizilerle çalışma yaparken kullanım açısından daha fazla kolaylık sağlıyor ve dizilerle birlikte kullanımda daha sık kullanılıyor.