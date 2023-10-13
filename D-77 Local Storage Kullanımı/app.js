//? Local Storage Kullanımı


/* 
Local Storage'da Session Storage gibi window objesi içerisinde tanımlanmış bir objedir.
Aynı şekilde çalışır fakat farklı olarak Local Storage'daki verilerimiz bilgisayarı
veya tarayıcıyı kapattığımızda silinmez.
*/


//! Local Storage Değer Atamak

localStorage.setItem("key1","Mutlu");
localStorage.setItem("key2","Ceyda");
localStorage.setItem("key3","Selma");
localStorage.setItem("key4","Kubi");

//! Local Storage Değer Çağırmak

// let value = localStorage.getItem("key1");
// console.log(value);

//! Local Storage'dan Değer Silmek

// localStorage.removeItem("key2");


//! Local Storage'ın Tümünü Temizlemek

localStorage.clear();


//! Local Storage'a Array Olarak Değer Atamak ve Çağırmak

let isimler = ["Mutlu","Ceyda","Selma","Kubi"];

localStorage.setItem("nameKey",JSON.stringify(isimler));

//*JSON.stringify verilerimizi array olarak storage'a atamak için kullanılıyor.

let value = JSON.parse(localStorage.getItem("nameKey"));

//* JSON.parse verilerimizi array olarak storage'dan çağırmak için kullanılıyor.
console.log(value);


value.forEach(function(names){
    console.log(names);
})

