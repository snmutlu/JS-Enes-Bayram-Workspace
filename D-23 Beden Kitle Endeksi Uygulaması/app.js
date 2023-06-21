//? Beden Kitle Endeksi Uygulaması


/*

Vücut kitle indeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle (kg/m²) hesaplanır.

 

18, 5 kg/m² ‘nin altındaki sonuçlar: İdeal kilonun altında
18, 5 kg/m² ile 24, 9 kg/m² arasındaki sonuçlar: İdeal kiloda
25 kg/m² ile 29, 9 kg/m² arasındaki sonuçlar: İdeal kilonun üstünde
30 kg/m² ile 39, 9 kg/m² arasındaki sonuçlar: İdeal kilonun çok üstünde (obez)
40 kg/m² üzerindeki sonuçlar: İdeal kilonun çok üstünde (morbid obez)

*/

let kilo = Number(prompt("Kilonuzu giriniz:"));

let boy = Number(prompt("Boyunuzu giriniz:"));

let sonuc = kilo/(boy*2);

if (sonuc<18.5){
    alert("İdeal kilonun altında" + sonuc);
}
else if(sonuc>=18.5 && sonuc<=24.9){
    alert("İdeal kiloda" + sonuc);
}
else if(sonuc>=25 && sonuc<=29.9){
    alert("İdeal kilonun üstünde" + sonuc);
}
else if(sonuc>=30 && sonuc<=39.9){
    alert("İdeal kilonun çok üstünde (obez)" + sonuc);
}
else if(sonuc>=40){
    alert("İdeal kilonun çok üstünde (morbid obez)" + sonuc);
}
















