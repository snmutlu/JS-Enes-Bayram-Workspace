/*

? Veri Tipleri

1-String = "Mutlu"
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function

*/

//! String

// let isim = "Mutlu";
// console.log(isim);
// console.log(typeof isim);

//! Number

// let sayi1 = 10;
// let sayi2 = 5.3
// console.log(sayi1+sayi2);
// console.log(typeof sayi1);

//Todo: String veri tipiyle sayılar yazdığımız zaman bu sayıları toplayamaz yanlızca yanyana ekleyebiliriz

// let a = "5";
// let b = "2";
// console.log(a+b);
// console.log(typeof a);

//! Boolean 

//True ve False' dan oluşur iki ihtimalin olduğu yerlerde kullanılan veri tipidir.

// console.log(5>2); //Burada 5=2'den büyük olduğu için true sonucunu alırız

// let a = 3;
// let b = 12;

// let sonuc = a+b;
// console.log(sonuc>18); // Burada 3+12=18 den küçük olduğu için false sonucunu alırız


//! Null

// Boş - Herhangi birşey yok anlamındadır. Bir değişkenin içini boşaltmak için yada
// ilk başta başlangıç değerini vermek için kullanabiliriz.

// let a = null; // Burada a değişkeninin veri tipini null yani boş olarak atamış oluyoruz

// a = 27;

// console.log(a);

//! Undefined

// Tanımlanmamış anlamındadır. Eğerki bir değişkeni yazıp bir değer atamadığımız, kendisini
// oluşturup değer ataması yapmadığımız veri tipleridir.

// let a;

// console.log(typeof a);

//! Object

// let insan = {
//     isim : "Mutlu",
//     soyisim : "SENEM",
//     yas : 28
// }
// console.log(insan);
// console.log(typeof insan);


// let rakamlar = [1,2,3,4,5]; //Burada kutu parantezleri kullanarak bir dizi tanımlamış olduk buda bir object veri tipidir
// console.log(rakamlar);
// console.log(typeof rakamlar);


//! Function

let func = function(){
    console.log("Merhaba");
}

func();
console.log(typeof func);
