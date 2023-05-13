//? ORTALAMA BULMA UYGULAMASI

// Ders Ortalaması Bulma

// Vize1: %30  Vize2: %30  Final: %40

let vize1 = Number(prompt("Vize 1 notunuzu giriniz:"));

let vize2 = Number(prompt("Vize 2 notunuzu giriniz:"));

let final = Number(prompt("Final notunuzu giriniz:"));

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Dersten geçtiniz tebrikler. Ortalamanız:" + ortalama);
    console.log("Dersten geçtiniz tebrikler");
}
else{
    alert("Kaldınız, geçmiş olsun. Ortalamanız:" + ortalama);
    console.log("Kaldınız, geçmiş olsun");
}

/* Burada öncelikle prompt dialogu sayesinde kullanıcıdan vize1 vize2 ve final değerlerini almış olduk.
Ve bu değerleri number içerisinde yazarak string veri tipini number veri tipine çevirmiş olduk.
Sonrasında aldığımız bu değerlerin %30 %30 ve %40 ortalamalarını alarak ortalama adındaki değişkenimize atadık.
if koşulumuzda da ortalama değerimizin 60'dan büyük veya 60'a eşit olup olmadığını sorguladık.
Eğer sınav sonuçlarımızın ortalaması 60'dan büyük veya eşitse if koşulumuzun içerisindeki alert'imiz çalıştı.
Eğer sınav sonuçlarımızın ortalaması 60'dan büyük veya eşit değilse else koşulumuzun içerisindeki alert'imiz çalıştı
*/

















