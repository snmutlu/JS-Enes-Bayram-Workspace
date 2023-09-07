//? Binary To Decimal Conversion -- 2'lik Sayıdan 10'luğa Çevirmek




let binary = "1011";

function convertBinaryToDecimal(binary){
    let toplam = 0;
    let ust = 0;

    for(let i=binary.length-1; i>=0; i--){
        toplam+=Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }
    console.log(toplam);
}

convertBinaryToDecimal(binary);

//! Not: Math.pow methodu bir sayının üstünü almak için kullanılır

// Örn; console.log(Math.pow(2,3)); 8 sonucunu konsolda görürüz.