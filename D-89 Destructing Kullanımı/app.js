//? Destructing Kullanımı

/*
Destructing yapısı bir array veya obje içerisindeki elemanların
teker teker kolay bir biçimde ayırımında kullanılabilir.
*/

//! Eski yöntem;

// let langs = ["C#","C++","JavaScript","Python"]
// let lang1,lang2,lang3,lang4

// lang1 = langs [0]
// lang2 = langs [1]
// lang3 = langs [2]
// lang4 = langs [3]

// console.log(lang1,lang2,lang3,lang4);

//* Önceden biz bu arrayler içerisindeki parçalama işlemlerini 
//* yukarıdaki gibi yapıyorduk. Ancak destruction yapısı sayesinde
//* bu işi kolaylaştırabiliyoruz. Örn;

//! Yeni yöntem;
// let langs = ["C#","C++","JavaScript","Python"]

// [lang1,lang2,lang3,lang4] = langs

// console.log(lang1,lang2,lang3,lang4);

//* Yani burada langs arrayinin 0. indexindeki elemanı değişkenlerimizin
//* bulunduğu array içerisindeki 0. indexteki değişkene setlemiş oluyoruz.
//* Ve bu işlem 0. 1. 2. 3. index olarak devam ediyor.

// const hesapla = (a,b)=>{
//     const toplam = a+b
//     const cikar = a-b
//     const carp = a*b
//     const bol = a/b

//     const dizi = [toplam,cikar,carp,bol]
//     return dizi
// }
// let [a,b,c,d] = hesapla(10,2)
// console.log(a,b,c,d);

//! Şimdi aynı yapıyı objelerle kullanmaya çalışalım

// const person = {
//     firstName : "Mutlu",
//     lastName : "SENEM",
//     salary : 12000,
//     age : 29
// }

//* Biz bu objemiz içerisindeki özellikleri destruction yapısı
//* kullanmadan şu şekilde çağırıyorduk;

// let isim, soyisim, maas, yas;

// isim = person.firstName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;

// console.log(isim,soyisim,maas,yas);

//* Destructing yapısı ile şu şekilde oluyor;

// let {firstName,lastName,salary,age} = person;

// console.log(firstName,lastName,salary,age);

//! Yalnızca objelerde bu özelliği kullanırken yukarıdaki obje
//! içerisindeki keyler ile değişken isimleri aynı olmak zorunda
//! aksi taktirde undefined hatası alırız.

//* Eğer biz değişken isimlerini farklı kullanmak istiyorsak şu
//* şekilde bir yöntem kullanabiliriz;

const person = {
    firstName : "Mutlu",
    lastName : "SENEM",
    salary : 12000,
    age : 29
}

let {firstName:isim,lastName:soyİsim,salary:maas,age:yas} = person;
//* Burada : işareti ile değişken ismini değiştirmiş oluyoruz.
console.log(isim,soyİsim,maas,yas);