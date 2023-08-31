//? Faktoriyel Bulma Uygulaması

// Faktoriyel hesaplama bir sayının kendinden 1'e kadar olan çarpımlarının toplanmasıdır.

// Örn; 5=5.4.3.2.1=120
//      6=6.5.4.3.2.1=720

let sayi = Number(prompt("Bir sayı giriniz:")); //Kullanıcıdan bir sayı aldık

let carpim = 1; // Bir çarpım değişkeni oluşturduk ve etkisiz olması için 1 değeri ile başlattık.

for(let i = 1; i<=sayi; i++){ //Burada i değerimiz 1'den başlıyor ve kullanıcının bize vermiş olduğu sayi değerine eşit olana kadar 1'er 1'er artıyor. i değerimiz kullanıcıdan aldığımız sayıya eşit olduğunda döngü tamamlanıyor.
    carpim=carpim*i; //i değerimiz her arttığında 1'den başlayarak carpim değerimizle çarpıyor ve çıkan sonucu tekrar carpim değişkenimize atıyoruz.
}

console.log(carpim);