//? Benzin İstasyonu Uygulaması

/*

1-) Dizel : 24.53

2-) Benzin : 22.25

3-) LPG : 11.1

Gelen müşteriden alacağımız bilgiler;

1-Yakıt Tipi

2-Alınacak yakıt litresi

*/

let dizel = 24.53 , benzin = 22.25 , lpg = 11.1; //Yakıt türlerinin tutarlarını tanımladık.

const yeniSatir = "\r\n";  //Yeni satıra geçmek için kullanacağımız değişkeni tanımladık.

const yakitMetni = "1-Dizel"+yeniSatir  //Bu bölümde yakıt türlerini alt alta sıraladık.
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Yakıt türünüzü seçiniz:";

let yakitTipi = prompt(yakitMetni); //Burada kullanıcıdan bir yakıt tipi aldık ve değişkenimize atadık.

if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){  //Aldığımız yakıt tipine göre buradaki if blokları çalıştı.

    let yakitLitresi = Number(prompt("Lütfen yakıt litresini giriniz")); 

    let bakiye = Number(prompt("Lütfen bakiyenizi giriniz"));
    
    if(yakitTipi=="1"){
        //Dizel
        let odenecekTutar = dizel*yakitLitresi; // Burada yakıt tipine göre ödenecek tutarı hesaplamak için işlem yaptık.
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye:" + (bakiye));
        }
        else{
            //Bakiye yeterli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar:" + odenecekTutar+yeniSatir
            +"Bakiye:" + bakiye+yeniSatir
            +"Eksik tutar:" +(odenecekTutar-bakiye));
        }
    }
    else if(yakitTipi=="2"){
        //Benzin
        let odenecekTutar = benzin*yakitLitresi; // Burada yakıt tipine göre ödenecek tutarı hesaplamak için işlem yaptık.
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye:" + (bakiye));
        }
        else{
            //Bakiye yeterli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar:" + odenecekTutar+yeniSatir
            +"Bakiye:" + bakiye+yeniSatir
            +"Eksik tutar:" +(odenecekTutar-bakiye));
        }
    }
    else if(yakitTipi=="3"){
        //LPG
        let odenecekTutar = lpg*yakitLitresi; // Burada yakıt tipine göre ödenecek tutarı hesaplamak için işlem yaptık.
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Kalan bakiye:" + (bakiye));
        }
        else{
            //Bakiye yeterli değil
            alert("Bakiyeniz yeterli değildir"+yeniSatir
            +"Ödenecek tutar:" + odenecekTutar+yeniSatir
            +"Bakiye:" + bakiye+yeniSatir
            +"Eksik tutar:" +(odenecekTutar-bakiye));
        }
    }
}
else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}





























