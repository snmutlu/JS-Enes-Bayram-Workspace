/*
1-Javascript senkron çalışan bir programlama dilidir.

Ancak JavaScript'i senkrondan asenkrona döndüren bazı şeyler vardır:

! 1-Timing: setTimeout'lar gibi function'lar
! 2-Event(olay): click,doubleclick vs gibi işlemler
! 3-HTTP İsteklerinde

 */



//! Senkron çalışma örnekleri:

// console.log("1");
// console.log("2");
// console.log("Mutlu");

// function selamla(){
//     console.log("Selam");
// }

// selamla()

//! Asenkron çalışma örnekleri:

console.log("Mutlu");

setTimeout(() => {
    console.log("Süre doldu ve çalıştı 1000ms");
}, 1000);

setTimeout(() => {
    console.log("500 ms de çalıştı");
}, 500);
console.log("SENEM");

// * Yani bu yukarıdaki yapıda senkron olan console log'lar direk en üste
// * yazdırılırken timeout'lar süreleri sonunda çalıştı. İlk olarak
// * 500ms süre olan timeout sonrasında 1000 ms süre olan timeout console'a
// * yazdırılmış oldu. Ayrıca senkron çalışan kodlar asenkron çalışan
// * kodları beklemezler.

//! Asenkron çalışan yapıları yönetmek için:

//! CALLBACK-PROMISE-ASYNC & AWWAIT

//! Yapılarını kullanarak asenkron yapıları senkrona çevirip yönetiyoruz.