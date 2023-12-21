//? SET KULLANIMI

/*
Set'ler de map'ler gibi bir dizi çeşididir. Set'lerin içerisine
koyduğumuz değerler yalnızca bir kere tutuluyor. Birden fazla
aynı değeri tutamıyoruz. Kullanılan methodlar map'lerde kullandığımız
methodlar ile aynı
*/

const set = new Set();

//! Add methodu
//* Set'lerde key,value mantığı yok içerisine tek bir değer bekliyor
//* ve biz bu değeri add methodu kullanarak veriyoruz.
//* İçerisine her türden değer verebiliriz.

set.add(true)
set.add(3.14)
set.add("Mutlu")
set.add(11)
set.add({username:"Mutlu", password:"123"})
set.add([1,2,3,4])

// console.log(set.size);


//* Bizler aynı değeri birkaç yere kopyalasak bile set sayesinde
//* tek bir kere tutuluyor. Örn;

// set.add("Mutlu")
// set.add("Mutlu")
// set.add("Mutlu")
// set.add("Mutlu")
// set.add("Mutlu")

// console.log(set.size);

//! Delete

// set.delete("Mutlu")

// console.log(set.size);


//! Has

// console.log(set.has("Mutlu"))

// console.log(3.14);


//! For of döngüsü

// for(let value of set){
//     console.log(value);
// }

//! ForEach ile de dönebiliriz

// const values = Array.from(set);

// console.log(values);

// values.forEach((value)=>{
//     console.log(value);
// })

//! Array'den Set oluşturma

// let array = [11,"Mutlu",true,"Ceyo",7,[1,2,3]];

// const newSet = new Set(array);

// console.log(newSet);