//? TRY&CATCH Kullanımı

/* try-catch'ler hata yönetimi için oldukça önemlidir.
 */

// let items;  //* Yaptığımız hata

// items.forEach((item)=>{
//     console.log(item);
// })


// console.log("Hatadan sonraki kodlar");

// let info = "Kodluyoruz"

// console.log(info);

/* Yukarıdaki yapıda items adında bir array üzerinde
dönmek istediğimiz için ve bu array'de boş olduğundan
bir hata alırız ve hatayı aldığımız koddan sonraki
kodlarımız çalışmaz. Bunu yönetmek için try-catch
yapısını kullanabiliriz.  */

/* Örneğin biz bir sunucudan bir veri bekliyoruz ve
bu alacağımız veriyi alabilme durumumuza göre
kodlarımızın çalışmasını organize etmek istiyoruz */

let product = [1,2,3,4]; //* Burada değişken ismi yanlış

try {
    products.forEach((number)=>{
        console.log(number);
    })
} catch (error) {
    console.log("Hata:",error);
}

/* Burada üzerinde forEach ile dönecek diziyi bulamadığı
için bir hata verecek fakat try blokları çalışmadığı
için catch blokları çalışarak bize hatamızı gösterecek.
Ardından yazdığımız diğer kodlar ise hiçbir şekilde
bu hatadan etkilenmeyecek ve normal bir şekilde
çalışmasına devam edebileceklerdir.*/

console.log("Hatadan sonraki çalışacak kodlar");

let myName = "Mutlu";

console.log(myName);