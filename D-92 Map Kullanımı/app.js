//? Map Nedir? - Map Kullanımı

//* Map ---------> key(anahtar) value(deger)

//* Mapler'i arraylerin,dizilerin alternatifi olarak kullanabiliriz.

//* Mapleri'i bu şekilde oluşturuyoruz;
//* new komutunu kullanıp map methoduyla map oluşturup bir değişkene atıyoruz.

// const map1 = new Map();

//! SET
//* Sonrasında oluşturduğumuz maplere key ve value'leri setlememiz gerekiyor.
//* Setleme yaparken bütün tiplerde değerler atayabiliyoruz

// map1.set(1,"Mutlu")
// map1.set(true,5)
// map1.set([1,2,3],{firstName : "Mutlu", lastName : "SENEM"})
// map1.set("5",true)

// map1.set(34,"İstanbul")
// map1.set(35,"İzmir")
// map1.set(06,"Ankara")
// map1.set(01,"Adana")


//! GET
//* Bizler bu setlediğimiz değerleri çağırmak için ise Get methodunu kullanıyoruz.

// console.log(map1.get(06));
// console.log(map1.get(34));


//! SIZE
//* Map içerisinde ne kadar değer olduğunu bulmak için size'ını alabiliriz.

// let value;

// value = map1.size;

// console.log(value);


//! DELETE
//* Map içerisinden bir değer silmek için ise delete methodunu kullanıyoruz.
//* Map içerisinden delete methodu ile bir değer sildikten sonra bize
//* true veya false olarak bir dönüş yapar.

// value = map1.delete(34)

// console.log(value);


//! HAS (Sahip Olmak)

//* Map içerisinde bir değer var mı diye sorgulama yapmak için kullanılır.
//* Eğer değer bulunuyorsa true, bulunmuyorsa false olarak dönüş yapar.

// console.log(map1.has(35));

// console.log(map1.has(95));

//! For Of Methodu ile Map Üzerinde Dönebiliriz

// for(let [key,value] of map1){
//     console.log(key,value);
// }


//! Ayrıca bu işlemi farklı yöntemlerle de yapabiliriz.

// const keys = Array.from(map1.keys());

// console.log(keys);

// keys.forEach((key)=>{
//     console.log(key,map1.get(key));
// })

//! Sadece keyleri de alabiliriz.
//! keys() methodu keyleri döner

// for(let key of map1.keys()){
//     console.log(key);
// }

//! Sadece valueleri de alabiliriz.
//! values() methodu value'leri döner

// for(let value of map1.values()){
//     console.log(value);
// }

//! Map'ten Array'e Çevirmek

// const array = Array.from(map1);

// console.log(array);

// array.forEach((value)=>{
//     console.log(value);
// })

//! Array'i Map'e Çevirmek

// const array2 = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [06,"Ankara"],
//     [01,"Adana"]
// ]

// const myMap = new Map(array2);

// console.log(myMap);