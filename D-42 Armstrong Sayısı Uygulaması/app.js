//? Armstrong Sayısı Uygulaması

// 153-370-407 Bir sayının rakamlarının küpünün toplamı kendisini veriyorsa bu sayıya armstrong sayısı deniyor. 

//Örn; 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1+125+27=153

let sayi = prompt("Sayı giriniz:"); //Öncelikle kullanıcıdan bir sayı değeri alıyoruz. Length-charAt gibi methodlardan faydalanabilmek için string veri tipinde alıyoruz.
let toplam = 0; //Kullanıcının verdiği sayının basamaklarının küpünü alıp karşılaştırmak amacıyla bir toplam değişkeni oluşturuyoruz.
for(let i = 0; i<sayi.length; i++){ // Burada kullandığımız length methodu kullanıcıdan aldığımız sayının basamak uzunluğunu öğrenmek amacıla kullanılıyor ve döngüye bu şekilde bir koşul oluşturabiliyoruz. Örn kullanıcı 153 sayısını yazdı ve 3 basamaklı bir sayı döngü 3 kere tekrarlanıyor.
    let rakam = sayi.charAt(i); //Burada kullandığımız charAt methodu ise kullanıcıdan aldığımız sayıdaki her basamağın rakam değerini bulmak içindir. Örn; 153 sayısının 0. indexinin karşılığı 1 dir. 1. indexinin karşılığı 5 ve 2. indexinin karşılığı ise 3 dür. Biz bu method sayesinde kullanıcının yazmış olduğu sayi değerindeki rakamların her birini rakam değişkenine atıyor ve küpünü alabiliyoruz. charAt değerine i değerini veriyoruz bu sayede 0'dan başlayıp sayının 0-1-2. indexindeki değeri almış oluyoruz
    toplam+=rakam*rakam*rakam; // charAt sayesinde ulaştığımız rakam değerinin küpünü alıp toplam değişkenimize atıyoruz. Ve döngü her döndüğünde toplam değerimizin üzerine += operatörü sayesinde rakam değerimizin küpünü eklemiş oluyoruz.
}
if(Number(sayi)==toplam){ //Burada eğer toplamda ulaştığımız her rakam değerinin küpünün toplamı kullanıcının girmiş olduğu sayıya eşit ise if bloklarındaki alert komutlarımız devreye girdi.
    alert("Armstrong sayısıdır.");
}
else{ //Ulaşmış olduğumuz toplam değeri kullanıcıdan aldığımız sayi değerine eşit değil ise de else blokları devreye girdi.
    alert("Armstrong sayısı değildir.");
}