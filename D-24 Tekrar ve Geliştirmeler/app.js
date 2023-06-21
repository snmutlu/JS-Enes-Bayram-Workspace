
/*
1-) Dizel : 24.53

2-) Benzin : 22.25

3-) LPG : 11.1
 */


let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;

const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatir
+"2-Benzin"+yeniSatir
+"3-LPG"+yeniSatir
+"Lütfen yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi=="1" || yakitTipi=="2" || yakitTipi=="3"){
    let yakitLitresi = Number(prompt("Lütfen yakıt litresini giriniz"));
    let bakiye = Number(prompt("Lütfen bakiyenizi giriniz"));

    if(yakitTipi=="1"){
        //Dizel
        let odenecekTutar = dizel*yakitLitresi;
        if(odenecekTutar<bakiye){
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Bakiyeniz:" + bakiye+yeniSatir
            +"İşlem tutarı:" + odenecekTutar);
        }
        else{
            alert("Bakiyeniz yeterli değildir!"+yeniSatir
            +"Ödenecek tutar:" + odenecekTutar+yeniSatir
            +"Bakiyeniz:" + bakiye+yeniSatir
            +"Eksik tutar:" +(odenecekTutar-bakiye));
        }
    }
    else if(yakitTipi=="2"){
        //Dizel
        let odenecekTutar = benzin*yakitLitresi;
        if(odenecekTutar<bakiye){
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Bakiyeniz:" + bakiye+yeniSatir
            +"İşlem tutarı:" +odenecekTutar);
        }
        else{
            alert("Bakiyeniz yeterli değildir!"+yeniSatir
            +"Ödenecek tutar:" + odenecekTutar+yeniSatir
            +"Bakiyeniz:" + bakiye+yeniSatir
            +"Eksik tutar:" +(odenecekTutar-bakiye));
        }
    }
    else if(yakitTipi=="3"){
        //Dizel
        let odenecekTutar = lpg*yakitLitresi;
        if(odenecekTutar<bakiye){
            bakiye = bakiye-odenecekTutar;
            alert("Yakıt alma işlemi başarılı"+yeniSatir
            +"Bakiyeniz:" + bakiye+yeniSatir
            +"İşlem tutarı:" +odenecekTutar);
        }
        else{
            alert("Bakiyeniz yeterli değildir!"+yeniSatir
            +"Ödenecek tutar:" + odenecekTutar+yeniSatir
            +"Bakiyeniz:" + bakiye+yeniSatir
            +"Eksik tutar:" +(odenecekTutar-bakiye));
        }
    }
}
else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}





























