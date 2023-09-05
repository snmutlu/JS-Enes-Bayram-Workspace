//? Kelime Sayısı Bulma Uygulaması


let metin = "Şuanda Yalova'da Javascript eğitimi görmekteyim";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Harf sayısı:" + sonuc);

function bul(harf){
    let toplam = 0;
    for(let i =0; i<metin.length; i++){
        if(metin.charAt(i)==harf){
            toplam+=1;
        }
    }
    return toplam;
}

/* Öncelikle bir metin oluşturduk ve bu metnin içerisinde kullanıcının bulmak istediği harfi kullanıcıdan aldık ve bu harfi bul adındaki methodumuza gönderdik. */

//! Return anahtar kelimesi methodun çağırıldığı yere dönüş yapar.

/* Sonrasında kullanıcıdan aldığımız harfi karşılaştırmak için function'ımız içerisinde bir for döngüsü oluşturduk ve .length sayesinde metin uzunluğu kadar döngüyü tekrarladık. charAt methodu sayesinde kullanıcının bize vermiş olduğu harf değerini metnimizin bütün indexlerindeki harflerle karşılaştırdık ve kullanıcıdan aldığımız harf değeri metindeki harf değerine her eşit olduğunda toplam değişkenimizin değeri 1 arttı. Sonrasında bu toplam değişkenimizi return ettik ve değişkenimizin değerini sonuc değişkenine atamış olduk. Son olarak bulduğumuz sonucu ekrana alert ile yazdırdık. */