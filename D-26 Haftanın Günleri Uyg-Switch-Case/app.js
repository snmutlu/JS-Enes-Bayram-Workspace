//? Haftanın Günleri Uygulaması-Switch-Case

const yeniSatir = "\r\n"

let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

//Burada kullanıcıdan bir sayı değeri alıyoruz ve sayı değişkenimize atıyoruz.
//Aldığımız sayı değeri hangi case'e eşitse o case'deki kodlar çalışıyor.
switch(sayi){ 

    case "1":
        //Kodlar
        console.log("Girilen sayı:"+sayi);
        break; //Break anahtar kelimesi case'leri kırmak için kullanılır.

    case "2":
        console.log("Girilen sayı:"+sayi);
        break;

    case "3":
        console.log("Girilen sayı:"+sayi);
        break;

    case "4":
        console.log("Girilen sayı:"+sayi);
        break;

    case "5":
        console.log("Girilen sayı:"+sayi);
        break;

    default:
        alert("Girilen sayı 1 ile 5 arasında olmalıdır!"+yeniSatir
        +"Girdiğiniz sayı:"+sayi);
        break;

}


//------------------------------------------

// const yeniSatir = "\r\n";

// let metin = "1-Pazartesi" + yeniSatir
//     + "2-Salı" + yeniSatir
//     + "3-Çarşamba" + yeniSatir
//     + "4-Perşembe" + yeniSatir
//     + "5-Cuma" + yeniSatir
//     + "6-Cumartesi" + yeniSatir
//     + "7-Pazar" + yeniSatir
//     +"Lütfen bir seçim yapınız:";

// let deger = prompt(metin)
// switch (deger) {
//     case "1":
//         console.log("Pazartesi günü");
//         break;

//     case "2":
//         console.log("Salı günü");
//         break;

//     case "3":
//         console.log("Çarşamba günü");
//         break;

//     case "4":
//         console.log("Perşembe günü");
//         break;

//     case "5":
//         console.log("Cuma günü");
//         break;

//     case "6":
//         console.log("Cumartesi günü");
//         break;

//     case "7":
//         console.log("Pazar günü");
//         break;

//         default:
//             console.log("Lütfen geçerli bir değer giriniz!");
// }

























