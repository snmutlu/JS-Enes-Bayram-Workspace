//? Haftanın Günleri Uygulaması-Switch-Case

const yeniSatir = "\r\n"

let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz")


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

    default:
        alert("Girilen sayı 1 ile 5 arasında olmalıdır!"+yeniSatir
        +"Girdiğiniz sayı:"+sayi);
        break;

}

























