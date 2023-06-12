//? Else If Yapısı

// 1. Yol

// 2. Yol

// 3. Yol

// Şeklinde 3 adet yolumuz mevcut olduğunu düşünelim.



let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz:")

if(secilenYol==1){
    alert("Seçilen yol " + secilenYol + ".yoldur.");
}

else if (secilenYol==2){
    alert("Seçilen yol " + secilenYol + ".yoldur.");
}
else if (secilenYol==3){
    alert("Seçilen yol " + secilenYol + ".yoldur.");
}
else{
    alert("Lütfen geçerli bir yol seçiniz.");
}

// Burada prompt sayesinde kullanıcıdan bir yol değeri almış olduk ve almış olduğumuz değeri secilenYol değişkenimize atamış olduk
// Eşittir yani == operatörü sayesinde kullanıcıdan aldığımız değerin veri tipi ayırt edilmeksizin karşılaştırılmasını sağladık.
// Sonrasında kullanıcıdan aldığımız değer doğrultusunda if - else if - veya else komutlarımızın içindeki kodlar çalışmış oldu.
// Ve kullanıcının seçtiği yola göre ekranda o yolun çalıştırdığı alert pop-up unu görmüş olduk.

// Not if - else if lerden herhangi birisi çalışmazsa else çalışır.





