//? While Döngüsü Pratikler

// 1 den 10 a kadar yazdıralım

// let sayac = 1;

// while(sayac<=10){

//     console.log(sayac);

//     sayac++; //Eğer burada sayac değerini ++ operatörüyle arttırmazsak döngü sonsuza dek 1 yazdırmaya devam eder.
// }

// 0 dan 10 a kadar çift sayıları yazdıralım

// let sayac = 0;

// while(sayac<=10){
//     if(sayac%2==0){
//         console.log(sayac);
//     }
//     sayac++;

// }

let sayac =1;

while(true){  //While(true) eğer bir koşul ile kullanılmazsa sonsuz bir döngü olarak çalışır.

console.log(sayac);
if(sayac==7){
    break; // Burada break kullanarak sonsuz döngüden kurtulmuş olduk ve sayac değerimiz 7'ye eşit olduğunda döngümüzden çıkmış olmamız sağlandı.
}
sayac++;
}