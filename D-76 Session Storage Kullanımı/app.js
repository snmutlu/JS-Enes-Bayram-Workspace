//? Session Storage Kullanımı

/* 
Session Storage window objesi içerisinde bulunan bir elemandır.
Session Storage'a Web üzerinden application bölümünden ulaşabiliriz.
Session Storage tarayıcımızın içerisinde bulunan bir depolama alanıdır.
Session Storage'miz içerisinde key ve value olarak adlandırılan bir yapı mevcut.
Key bölümü değerlerimizi yakalayabileceğimiz bir isim value bölümü ise
değerlerimizin tutulduğu bölüm olarak düşünebiliriz. 
! Session Storage'a kaydettiğimiz her veri string tipinde kaydolur ve çağırılırken de 
! string tipinde dönüş yapar.
! Bizler Session Storage'a Number,Array veya farklı bir veri tipinde bir veri kaydetsek
! bile string olarak kaydolacaktır. 
Ayrıca Session Storage'daki veriler tarayıcı veya
bilgisayar kapandığında silinir.
*/

//! Session Storage'a Değer Eklemek

// sessionStorage.setItem("name","Mutlu");
// sessionStorage.setItem("lastName","Senem");
// sessionStorage.setItem("age","29");


//! Session Storage'dan değer silmek

// sessionStorage.removeItem("age");

//! Session Storage'dan Değer Çağırmak

// sessionStorage.getItem("name");

// let value = sessionStorage.getItem("name");

// console.log(value);

// //* Eğer Session Storage'da olmayan bir değeri çağırmaya çalışırsak null dönüşü alırız.

// if(value == null){
//     console.log("Değer Bulunamadı");
// }
// else{
//     console.log("Değer Bulundu:",value);
// }

//! Session Storage'dan Herşeyi Silmek

// sessionStorage.clear();

//! Session Storage'a Array Tipinde Veri Kaydetmek

// let names = ["Mutlu","Ceyda","Selma","Kubilay"];

// sessionStorage.setItem("keyNames",names);

// let value = sessionStorage.getItem("keyNames");

// console.log(value);

//* Biz yukarıdaki şekilde bir array'i kaydetmek istesekte string tipinde kaydolacak ve
//* bize dönerken de string tipinde dönüş yapacak.
//! Biz bu yüzden array olarak veri kaydetmek için JSON objesi içerisindeki .stringify
//! methodunu kullanıyoruz. JSON.stringify()

let namesArray = ["Mutlu","Ceyda","Selma","Kubilay"];

sessionStorage.setItem("namesArray",JSON.stringify(namesArray));

//* Bu şekilde biz array olarak verimizi storage'a kaydetmiş olduk.

//! Session Storage'dan Veriyi Array Olarak Çağırmak

//* Biz array olarak kaydettiğimiz veriyi aynı şekilde çağırmak için ise yine
//! JSON objesi içerisindeki parse() methodunu kullanıyoruz.

let value = JSON.parse(sessionStorage.getItem("namesArray"));

console.log(value);

//* Ve sonrasında biz istersek bu array ile forEach döngüsü gibi işlemler yapabiliriz.

value.forEach(function(name){
    if(name=="Ceyda"){
        console.log("Aranan isim bulundu: ",name);
        
    }
})