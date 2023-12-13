//? Spread Operatörü (Dilimlemek)

//* ... ile kullanılır, diziler arası parametre aktarmak için,
//* iki diziyi birbirine bağlamak için veya bir diziyi başka bir
//* diziye kopyalamak için kullanılabilir.

// let numbers = [10,20,30,40]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }

//! Eski yöntem;

// add(numbers[0],numbers[1],numbers[2],numbers[3])

//! Yeni yöntem (Spread Operatörü)

// add(...numbers)

//* Yani ... dan sonra verdiğimiz dizinin içerisinde bulunan index
//* numaralarına göre değerleri alıyor ve kullanacağımız add function
//* una parametre olarak vermiş oluyoruz.

//* Örneğin iki farklı dizimiz olsun ve biz 2. dizimizin arkasına
//* birinci dizimizin elemanlarını ekleyelim.

// const diller1 = ["Java","C#"]
//! Eski yöntem;
// const diller2 = ["Php","Phyton",diller1[0],diller1[1]]
// console.log(diller2);
//! Yeni yöntem;
// const diller2 = ["Php","Phyton",...diller1]
// console.log(diller2);

//! Numaralar içeren bir array oluşturalım ve array'in ilk iki index
//! indeki numaraları a-b değişkenlerine sonrasındaki bütün sayıları
//! ise kalanSayilar adında bir değişkene setleyelim;

// const numbers = [1,2,3,4,5,6,7,8,9];
// let [a,b,...kalanSayilar] = numbers;
// console.log(a,b,kalanSayilar);

//* Burada Spread operatörü sayesinde 1. ve 2. indexten sonraki gelen
//* bütün sayıları kalanSayilar değişkenimize atamış olduk.

//! Ayrıca biz Spread operatörü sayesinde bir diziyi başka bir
//! diziye kolayca kopyalayabiliyoruz. Örn;

const array1 = ["Mutlu","Ceyda","Selma","Kubi"]

//! Eski yöntem;

// const array2 = []
// array2[0]=array1[0]
// array2[1]=array1[1]
// array2[2]=array1[2]
// array2[3]=array1[3]

// console.log(array2);

//! Yeni yöntem;

const array2 = [...array1]
console.log(array2);