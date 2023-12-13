//? Arrow Function Kullanımı

/*
Arrow Function ES6 Standartlarıyla birlikte gelen en önemli 
özelliklerden biridir.
*/

//* Önceden bizler functionları şu şekilde kullanıyorduk;

// function yazdir (){
//     console.log("Merhaba");
// }
// yazdir();


//* Arrow Functionlar sayesinde şu şekilde kullanımlar yapabiliriz;


//* Parametresiz Arrow Function

// const yazdir = ()=>{
//     console.log("Merhaba");
// }

// yazdir();

//* Biz burada yazdığımız functionu yazdir adındaki değişkenimize
//* atamış oluyoruz

//* Parametreli Arrow Function

// const yazdir = (firstName,lastName)=>{
//     console.log("Merhaba",firstName,lastName);
// }

// yazdir("Mutlu","SENEM");

//* Burada function'umuz için firstName ve lastName parametrelerini
//* alıp console'a yazdırmış oluyoruz.

//! Eğer ki bizim functionumuz içerisindeki kodlar tek satırdan
//! oluşuyorsa biz bu methodun kıvırcık parantezlerini kaldırabiliriz.

//* Örn;

// const yazdir = (firstName,lastName)=>
    
// console.log("Merhaba",firstName,lastName);


// yazdir("Mutlu","SENEM");

//! Eğer ki biz function için tek parametre kullanacaksak parametre
//! nin yanındaki parantezleri de kaldırabiliriz.

//* Örn;

// const yazdir = middleName => console.log("Merhaba",middleName)

// yazdir("Ceyda");

//* Örneğin bir küp alma function'u oluşturalım.

// const kupAl = (x)=>{
//     return x*x*x
// }

// console.log("Değer",kupAl(3));

//* Biz burada tek bir işlem yaptığımız için return dahil birçok
//* şeyi kaldırabiliriz. 

//* Örn;

const kupAl = x => x*x*x

console.log("Değer",kupAl(3));

//* Bu şekilde bu kadar sadeleştirebiliyoruz.

//! Önemli Not: 

/*
Arrow Functionlara bir isim verilmediği için mutlaka bir değişkene
atanır. Daha sonrasında biz bu functionları kullanmak istediğimiz
yerde çağırmak için değişkene atarız.
*/