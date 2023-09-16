//? Math Objesi Methodları

// Math sınıfı window objesi içerisinde tanımlanmış bir objedir.

/*

1-Floor
2-Ceil
3-Round

4-Max
5-Min

6-Abs
7-Sqrt
8-Pow
9-Random

-----> PI sayısı

*/

//! 1-Math.floor()

// Zemin anlamına gelir, bir sayının noktadan sonraki kısmını atar. 
// Örn:3.99==3

// let a = 3.99;
// console.log(Math.floor(a));

//! 2-Math.ceil()

// Noktadan sonrasına bakmaksızın sayıyı bir üst sayıya yuvarlar. 
// Örn:3.01==4

// let a = 3.01;
// console.log(Math.ceil(a));

//! 3-Math.round()

// Küsüratlı sayıyı mümkün olan en yakın değere yuvarlar.

// Örn: 3.89==4  veya 3.15==3 

// let a = 3.89;
// let b = 3.15;
// console.log(Math.round(a)); // >>>>>>>> 4
// console.log(Math.round(b)); // >>>>>>>> 3

//! 4-Math.max()

// Birden çok number tipindeki veri içerisinden en büyüğünü geri döner.

// console.log(Math.max(1,2,5,60,23));  // >>>>>>> 60 değerini yakalamış oluruz

//! 5-Math.min()

// Birden çok number tipindeki veri içerisinden en küçüğünü geri döner.

// console.log(Math.min(-30,-2,10,25,-87,0));  // >>>> -87 değerini yakalamış oluruz

//! 6-Math.abs()

// Mutlak değer almak için kullanılır.

// Örn: |-12| = 12

// let a = -12;
// console.log(Math.abs(a));  // >>>>>> 12 sonucunu almış oluruz.

//! 7-Math.sqrt()

// Karekök almak için kullanılır.

// Örn: 9 sayısının karekökü == 3'dür

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(144));


//! 8-Math.pow()

// Bir sayının üstünü almak için kullanılır.

// Örn: 2 üzeri 4 == 2*2*2*2 == 16' dır

// console.log(Math.pow(2,4));  // >>>>>>>> 16 sonucunu almış oluruz.
// console.log(Math.pow(3,3));  // >>>>>>>> 27 sonucunu almış oluruz.
// console.log(Math.pow(5,3));  // >>>>>>>> 125 sonucunu almış oluruz.


//! 9-Math.random()

// Rastgele değerler üretmek, random bir sayı üretmek amacıyla kullanılır.

// 0 ile 1 arasında rastgele bir değer üretir. Biz bu değeri kullanılabilirlik açısından daha işlevsel hale getirmek amacıyla 0 ile 100 arasında bir değere taşımak için 100 ile çarpabilir ve küsüratlarını diğer Math.floor , Math.ceil veya Math.round gibi methodlarla atabiliriz.

// console.log(Math.floor(Math.random()*100));

// Burada üretilen random sayıyı 100 ile çarpmış ve Math.floor methodu ile küsüratını atmış olduk. Bu işlemin açılımı aşağıdaki gibidir;

// let a = Math.random();
// let b = (a*100);
// let c = (Math.round(b));
 
// console.log(a);
// console.log(b);
// console.log(c);

// Örnek çalışma;

let c = (Math.floor(Math.random()*100));
let d = 10;

console.log(c);
console.log(d);

function sayi (f,e){
    if((f+e)>50){
    
    console.log("Selam");
    let sonuc = f+e;
    return sonuc;
}
else{
   
    console.log("Hello");
}

}

function donenDeger2(toplam){
    console.log(toplam+toplam);
}

let donenDeger = sayi(c,d);

console.log("Toplam:"+donenDeger);

donenDeger2(donenDeger);






//! PI Sayısı

// Bir method değil bir özelliktir. Yazıldığı alanda pi sayısını verir.

// console.log(Math.PI);