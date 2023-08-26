//? Do-While Döngüsü Pratik


//! 1'den 10'a kadar yazdıralım

// let sayac = 1;

// do {
//     console.log(sayac);
//     sayac++;
// } while (sayac<=10);


//! Burada koşul false olsa da console bölümüne 1 kere yazı yazılmış olacak.
// let yas = 29;

// do {
//     console.log("Ehliyeti alabilirsiniz");
// } while (yas>=30);

//! 1'den 20'ye kadar olan tek sayıların toplamını bulalım.

let sayac = 1;
let toplam = 0;
do {
    if(sayac%2==1){
        toplam+=sayac;
    }
    sayac++;
    
} while (sayac<=20);

console.log("Toplam:",toplam);