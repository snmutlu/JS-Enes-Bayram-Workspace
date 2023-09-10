//? Dizilere Başlayalım

let sayilar = [0,1,2,3,4,5,"Mutlu",7,"Ceyda",9];

console.log(sayilar[8]);

// Bu şekilde index numaralarını kullanarak dizilerin içerisindeki elemanlara erişim sağlayabiliriz.

// Örneğin yukarıdaki "Mutlu" değerini başka bir değerle değiştirmek istiyoruz

sayilar[6]="Selma";

console.log(sayilar[6]);

// Bir dizinin en sonundaki elemana ulaşmak istersek .length-1 kullanabiliriz

// Örn: 

sayilar[sayilar.length-1]="Mutlu";
console.log(sayilar[9]);


// Örneğin bir isimler dizisi oluşturalım

let isimler = ["Mutlu","Kubilay","Selma","Ceyda"];

isimler[1]="Kubi"; //Burada Kubilay değerindeki 1. indeximizi "Kubi" ile değiştirmiş olduk.

console.log(isimler);

//Birden fazla veri tipini içeren bir dizi oluşturalım.

let karisikDizi = [1,"Mutlu",5.5,true,null,undefined];

console.log(karisikDizi[4]);

//Eğer biz dizinin içinde barındırdığı eleman sayısından daha yüksek bir değer girersek undefined hatası alırız.
