//? String Sınıfının Methodları


let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2023";


//! 1-charAt()

// Vermiş olduğumuz index numarasındaki karakteri bize dönen methoddur. İndex numaralarını saymaya 0 dan başlar.

// let karakter = kurs.charAt(3);
// console.log(karakter);

//! 2-concat()

// İki string ifadeyi veya iki diziyi birbiriyle birleştirmek için kullanılır. Birden fazla değerle birleştirme yapılabilir ve dizilerin orjinal halleri bozulmaz.

// let sonuc = kurs.concat(" ",tarih);
// console.log(sonuc);

//! 3-indexOf()

// Vermiş olduğumuz karakterin index numarasını return eder.

// let index = kurs.indexOf("W");
// console.log(index);

//! 4-lastIndexOf()

// Vermiş olduğumuz kelimenin başlangıcının index numarasını return eder. indexOf alternatif olarak kullanılabilir.

// let index = kurs.lastIndexOf("Geliştirme");
// console.log(index);

//! 5-toUpperCase()

// Tüm alfabetik karakterlerin hepsini büyük harfe çeviren bir methoddur. Aynı zamanda çevirilen metnin orjinal hali bozulmaz, büyük harfli bir kopyası oluşmuş olur.

// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);

//! 6-toLowerCase()

// Tüm alfabetik karakterlerin hepsini küçük harfe çeviren bir methoddur. Aynı zamanda çevirilen metnin orjinal hali bozulmaz, küçük harfli bir kopyası oluşmuş olur.

// let sonuc = kurs.toLowerCase();
// console.log(kurs);
// console.log(sonuc);

//! 7-trim()

// Space(boşluk) leri sağdan soldan temizlemek için kullanılır.

// let kurs1 = "          Modern Web Geliştirme Kursu          ";
// console.log(kurs1);
// console.log(kurs1.trim());

//! 8-slice()

// Dilimlemek için kullanılır.

// console.log(kurs);
// console.log(kurs.slice(7,10));

// Yani kurs'un 7. indexinden başla ve 10. indexine kadar olan bölümü dilimle ve yeni bir dizi oluştur demiş oluyoruz.

//! 9-subString()

// Slice methodu ile aynı şekilde çalışır, bir kelime veya bir harfi ayırmak için kullanabiliriz.

// console.log(kurs);
// console.log(kurs.substring(0,6));

//! 10-replace();

// Yer değiştirmek anlamındadır. Hedef aldığımız ifadeyi vermiş olduğumuz ifadeyle değiştirmek için kullanılır. Metnin orjinali bozulmaz.

// console.log(kurs);
// console.log(kurs.replace("Modern","Güncel"));

// Burada "Modern" kelimesi yerine "Güncel" kelimesini yazdırmış olduk.

//! 11-split()

// Belirtmiş olduğumuz bir ayırıcıya göre ayırıp dizi haline getirir.

// let kurs2 = "Modern,Web,Geliştirme,Kursu";
// console.log(kurs2);
// let dizi = kurs2.split(",");
// console.log(dizi);

// Burada virgüllere göre kelimeleri ayırıp her bir kelimeyi ayrı bir dizi haline getirmiş olduk.

//! 12-valueOf()

// Bu methodun açıklaması ileriki derslerde görülecek.

// let deger = "34";
// let sonuc = deger.valueOf();

//! 13-startsWith()

// Cümlenin veya kelimenin verdiğimiz değerle başlayıp başlamadığını kontrol eder ve bize true veya false olarak geri dönüş yapar.

// console.log(kurs);
// console.log(kurs.startsWith("M"));

// Burada "Modern Web Geliştirme Kursu" şeklinde bir cümlemiz olduğu için ve "M" harfini sorguladığımız için sonuç true olarak dönüş yaptı.

//! 14-endsWith()

// Cümlenin veya kelimenin verdiğimiz değerle bitip bitmediğini kontrol eder ve bize true veya false olarak geri dönüş yapar.

// console.log(kurs);
// console.log(kurs.endsWith("Kursu"));

