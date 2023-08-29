//? Break ve Continue Anahtar Kelimeleri Kullanımı

// 1'den 10'a kadar sayıları yazdıralım 8'e geldiğimizde döngüden çıkalım.

//! Break döngüden çıkmak için kullanılır

// let sayac = 1;

// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break; // Break döngüyü tamamen kırıp dilediğimiz zaman çıkmak için kullanmış olduğumuz bir anahtar kelimedir.
//     }
//     sayac++;
// }

//! Continue döngüyü yalnızca 1 kere kırmak için kullanılır.

//Örn; 1-2-3-4-5-6-7-9-10 yazdırmak istiyoruz ve 8 i yazdırmak istemiyoruz.

let sayac = 0;

while(sayac<=10){
    sayac++;
    if(sayac>10){
        break;
    }
    if(sayac==8){
        continue;  //Continue anahtar kelimesinden sonra while'ın bitişine kadar olan kodların hiç birisi çalışmaz ve döngüyü 1 kereliğine kırmış olur. Bu sayede sayac değerimiz 8'e eşit olduğunda konsola yazdırmamış oluruz.
    }
    console.log(sayac);
}