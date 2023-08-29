//? Asal Sayı Bulma Uygulaması

// Asal sayı 1'e ve kendisinden başka hiçbir böleni olmayan sayılara denir. Örn:13 sadece 1'e ve kendisine tam bölünür.

let sayi = Number(prompt("Lütfen bir sayı değeri giriniz:"));
let sonuc = true;
for(let i=2; i<= Math.floor(sayi/2); i++){
    if(sayi%i==0){
        //Asal değildir
        sonuc=false;
        break; 
    }
}
if(sonuc){
    alert(sayi+"-Asaldır.");
}
else{
    alert(sayi+"-Asal değildir.");
}

//Öncelikle kullanıcıdan asal olup olmadığını kontrol edeceğimiz sayı değerini alıyoruz ve sayi değişkenimize Number veri tipinde atıyoruz.

//Sonrasında for döngüsü içerisinde aldığımız sayının bölme işlemini yapacağımız i değişkenimizi oluşturuyoruz ve 2'den başlatıp kullanıcıdan aldığımız sayının yarısına kadar böleceğimiz için 1-1 arttırıyoruz.

//Kullanıcının bize verdiği sayının yarısı küsüratlı çıkabileceği için bu sayıyı tam sayıya çevirmek adına Math.floor methodunu kullanıyoruz. Bu sayede çıkan küsüratlı sayıyı alt değerine yuvarlamış oluyoruz. Örn: 7.3==7 oluyor.

//Sonrasında eğer sayi değerimizin i değerimizden herhangi birine bölümünden 0 sonucunu elde ediyorsak if bloklarımız çalışıyor ve sonuc değerimiz false oluyor ve break anahtar kelimesiyle o döngüyü kırıyoruz. Yani kullanıcının girdiği sayının asal sayı olmadığını anlıyor ve döngüyü kırıyoruz zaman kaybetmemek için.

//Sonrasında sonuc değerimiz true ise if bloğumuz çalışıyor ve alert ile sayi değerini ve "-Asaldır" metnini yazdırmış oluyoruz.

//Eğer sonuc değerimiz false olduysa else bloğumuz devreye giriyor ve sayi değerini ve "-Asal değildir" metnini yazdırmış oluyoruz.