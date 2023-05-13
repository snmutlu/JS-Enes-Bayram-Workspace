//? KOŞUL YAPILARI PRATİK

// let not = 65;

// if(not>50){
//     console.log("Geçtiniz, notunuz:" + not);
// }
// else{
//     console.log("Kaldınız, notunuz:" + not);
// }

// Not değerimiz 50' den büyükse if bloğumuzdaki kodlar, değilse else bloğumuzdaki kodlar çalışacaktır.

let yas = Number(prompt("Yaşınız:")); // Burada number ile string tipini number'a dönüştürmüş olduk.

let para = prompt("Bütçeniz:");

if(yas>=18 && para>=3000){
    alert("Ehliyet sınavına katılabilirsiniz")
}
else{
    alert("Ehliyet sınavına katılamazsınız")
}

/* Yukarıda prompt ile kullanıcıdan yaş ve bütçe değerlerini alıyoruz ve if koşuluyla yaşın 18'den büyük ve paranın 3000'den büyük
olup olmadığını sorguluyoruz. Eğer iki koşulda true sonuç veriyorsa if koşulumuzdaki alert çalışıyor. Eğer ve operatörümüz sayesinde
bir koşul true sonuç vermiyorsa if çalışmıyor ve else içerisindeki alert çalışıyor.
*/
