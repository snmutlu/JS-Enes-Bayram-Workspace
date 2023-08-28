//? Parametreli Method Oluşturma

// function yazdir(isim,soyisim){ //Bu bölümdeki parantezler içerisindeki isim,soyisim bizim parametrelerimizdir.
//     debugger;
//     console.log(isim+" "+soyisim);
// }
// debugger;
// yazdir("Mutlu","SENEM");
// yazdir("Selma","SENEM");

//Parametre kullanmaktaki amaç o an o methodu çağırdığımızda hangi değeri verirsek o değerlerle çalışır veya bir değeri bir yere taşımak içinde parametre kullanabiliriz.

//Örneğin bir sayının küpünü alacağımız bir sistem oluşturalım

// cube(5);

// cube(3);

// cube(4);
//Burada görüldüğü üzere biz fonksiyonlarımızı yukarıda veya aşağıda çağırabiliyoruz.

// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }

let yas = Number(prompt("Yaşınızı giriniz:"));

function kontrolEt(yas){
    if(yas>20){
        console.log("Ehliyet alabilirsiniz.");
    }
    else{
        console.log("Ehliyet alamazsınız.");
    }
}

kontrolEt(yas);


/*Not: Eğer bir yerde bir parantez aç kapa varsa o bir metottur. Örn: parseInt() */