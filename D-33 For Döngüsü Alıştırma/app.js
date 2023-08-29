//? For Döngüsü Alıştırma

// 1 den 10 a kadar yazdıralım

//for(let i=1; i<=10; i++){ //Burada öncelikle i değişkenimizi oluşturduk ve 1 değerini atadık sonrasında i değeri 10 dan küçük
//    console.log(i);     //veya eşit olana kadar i değerimizi 1 arttırdık ++ operatörümüz ile ve console a yazdırdık.
//}

// 1 den 10 a kadar çift sayıları yazdıralım

//for(let i=0; i<=10; i+=2){ // Burada ise i değişkenimizi 0 verdik ve += operatörümüzle i değerimizi 2 artacak şekilde ayarladık
//    console.log(i);
//}

/*
Mutlu
Naber
Mutlu
Naber
Yazdıralım*/

//for(let i=1; i<=10; i++){
//    if(i%2==1){  // Burada i değerimiz eğer tek sayıysa Mutlu yazdırdık yani if kodlarımız çalıştı.
//        console.log("Mutlu");
//    }
//    else{ //Eğer tek haneli değilse else kodlarımız çalıştı ve naber yazdırmış olduk
//        console.log("Naber");
//    }
//}

// 50 den 1 e kadar gidelim ve toplamlarını bulalım

let toplam=0;
for(let i=50; i>=1; i--){ //Burada ise i değerimizi 50'den başlattık ve 1'e kadar düşürdük
    toplam=toplam+i; //Düşürdüğümüz her değerde i değerimizi tekrar toplattık
    console.log(i);
}

console.log("Toplam:",toplam); //Ve son olarak bütün toplamlardan çıkan değer toplam değişkenine atandı ve console'a yazdırdık.







