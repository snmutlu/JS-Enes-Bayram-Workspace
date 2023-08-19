//? TYT Puan Hesaplama-Switch Case

/*
?-Sorular
1-Türkçe 40 Soru
2-Matematik 40 Soru
3-Sosyal Bilimler 20 Soru
4-Fen Bilimleri 20 Soru
Doğru soru başına 4 puan geldiğini kabul ediyoruz

100 puan Ösym veriyor
Okul puanı max 60 puan
 */

let turkceDogru , turkceYanlis = 0; 
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let okulPuani = 0;
//Öncelikle matematiksel işlemler yapacağımız değişkenlerimizi oluşturduk ve değerlerini başlangıçta 0 olarak atadık


let puan = 0;


const yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoş Geldiniz"+yeniSatir
+"1-Puan Hesapla"+yeniSatir
+"2-Çıkış Yap";
//Sonrasında kullanıcıyı sitede karşılayacak mesaj kutumuzu oluşturduk

let secim = prompt(mesaj);
//Oluşturduğumuz mesaj kutusu ile kullanıcıdan bir seçim yapmasını istedik
//Kullanıcının yaptığı seçim değerini secim değişkenine atadık.

switch(secim){
    //Kullanıcının yaptığı seçime göre case veya default kodları çalıştı.
    case "1":
        okulPuani = Number(prompt("Okul puanınızı giriniz:"));
        turkceDogru = Number(prompt("Türkçe doğru sayısı:"));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısı:"));

        matematikDogru = Number(prompt("Matematik doğru sayısı:"));
        matematikYanlis = Number(prompt("Matematik yanlış sayısı:"));

        sosyalDogru = Number(prompt("Sosyal doğru sayısı:"));
        sosyalYanlis = Number(prompt("Sosyal yanlış sayısı:"));

        fenDogru = Number(prompt("Fen doğru sayısı:"));
        fenYanlis = Number(prompt("Fen yanlış sayısı"));
        //Oluşturduğumuz değişkenlere atanacak değerleri kullanıcıdan aldık ve veri tiplerini number'a çevirdik.


        let dogruSayisi = turkceDogru+matematikDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
        puan = (kalanDogruSayisi*4) + 100 + okulPuani;
        //Aldığımız değerler ile matematiksel işlemler yaptık ve çıkan sonucu
        //puan değişkenine atadık.

        alert("TYT Puanınız:" + puan);
        //En son puan değişkenimize atanan değeri ekrana yazdırdık.

        break;

        case "2":
            alert("Uygulamadan Çıkış Yapıldı");
            break;

            default:
                alert("Lütfen Geçerli Bir Değer Giriniz!");
                break;
}
