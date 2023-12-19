//? For in - For of Döngüleri

//! For in : Dizilerdeki elemanların index numarasını yakalamak için kullanılır.

//! For of : Dizilerdeki elemanların isimlerini yakalamak için kullanılır.

let names = ["Mutlu","Ceyda","Selma","Kubi"];

// names.forEach(function(name){
//     console.log(name);
// });

// names.forEach((name)=>{
//     console.log(name);
// });

//* Önceden biz dizilerimiz içerisindeki elemanlar üzerinde dönmek için
//* yukarıdaki gibi forEach methodundan faydalanıyorduk.

//! For in Döngüsü

//* For in döngüsü bir dizi üzerinde dönerken o dizinin her bir elemanının
//* index numarasını verir.

//* for-değişken tanımlama-in-üzerinde dönülecek dizi ismi

// for(let a in names){
//     console.log(a);
// };

//* Eğer biz index numarasından sonra eleman isimlerini de yakalamak istiyorsak
//* şu şekilde bir yöntem kullanabiliriz;

// for(let a in names){
//     console.log(a , names[a]);
// };

//! For of Döngüsü

//* For of döngüsü bir dizi üzerinde dönerken o dizinin her bir elamanının
//* değerini-ismini verir.

//* for-değişken tanımlama-of-üzerinde dönülecek dizi ismi
// for(let b of names){
//     console.log(b);
// }

//* Eğer biz eleman isimlerinden sonra index numaralarını da yakalamak
//* istiyorsak şu şekilde bir yöntem kullanabiliriz;

// for(let b of names){
//     console.log(b,names.indexOf(b));
// }