//? Çarpım Tablosu Uygulaması

// İç içe döngüler kullanarak 1'den 10'a kadar bütün sayıların çarpıldığı bir çarpım tablosu yapmaya çalışacağız.

for(let i =1; i<=10; i++){
    for(let j =1; j<=10; j++){
        console.log(i+"x"+j+"="+(i*j));
    }
    console.log("--------------------------"); //İçteki döngümüz tamamlandığında konsola bir çizgi çekmiş olduk.
}

//Burada içteki for döngümüz j değeri 10'a eşit olana kadar tekrarlanmaya devam edecek. Sonrasında j değerimiz 10'a eşit olduğunda dışdaki i döngümüzdeki i değerimiz 1 artacak ve bu sayede 10'a kadar olan bütün sayıları birbiriyle çarpabileceğiz.