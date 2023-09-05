//? Mükemmel Sayı Uygulaması

// 6-28-496
// 6 = 1+2+3+6 = 12 == 6*2
// Bir sayının bölenlerinin toplamı sayının iki katına eşitse o sayı mükemmel sayıdır.


function itsPerfectNumber(number){
    let toplam = 0;
    for(let i = 2; i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        console.log("Mükemmel sayıdır!");
    }
    else{
        console.log("Mükemmel sayı değildir!");
    }
}

itsPerfectNumber(28);


/* Öncelikle itsPerfectNumber adında bir fonksiyon oluşturduk sayılarımızı karşılaştıracağımız toplam değişkenimize 0 değeri verdik ve for döngümüzle kullıcıdan aldığımız sayımızın sayının yarısına kadar olan tam bölenlerini tespit ettik ve her tam bölen sonucunu toplam değişkenimize atadık. Sonunda toplam değişkenimizin kullanıcıdan aldığımız sayının 2 katına eşit olup olmadığını test ettik ve sonuç true ise kullanıcının girmiş olduğu sayının mükemmel sayı olduğunu saptadık.  */