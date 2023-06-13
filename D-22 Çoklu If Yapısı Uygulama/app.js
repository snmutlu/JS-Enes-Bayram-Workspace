//? Çoklu If Yapısı Uygulama

//!Örnek-1

// Örneğin kullanıcıdan bir isim ve 11 haneli tckn alacağımız
// Bir yapı oluşturmaya çalışalım

// let ad = prompt("İsminizi giriniz:");

// let tckn = prompt("TCKN giriniz:");

// kontrolEt(ad,tckn);

// function kontrolEt(ad,tckn){

// if(ad!=""){
//     if(tckn.length==11){
//         console.log("İsim ve tckn sorunsuz girildi.");
//     }
//     else{
//         console.log("Lütfen tckn numaranızı 11 haneli giriniz.");
//     }
// }
// else{
//     console.log("Lütfen isim alanını boş bırakmayınız!");
// }
// }




//! Örnek-2
//Burada sadece çoklu ifleri kullanarak aynı yapıyı oluşturmaya çalışıyoruz

let ad = prompt("Lütfen isminizi giriniz:"); // Kullanıcıdan isim değeri aldık

let tckn = prompt("Lütfen tckn giriniz:"); // Kullanıcıdan tckn değeri aldık

kontrolEt2(ad,tckn); // Burada bir method oluşturduk

function kontrolEt2(ad,tckn){
    if(ad==""){ //Burada almış olduğumuz ad bilgisinin girilmiş olup olmadığını sorguladık
        // Eğer almış olduğumuz değer boş ise buradaki kodlar çalıştı
        console.log("Lütfen isim alanını boş bırakmayınız!");
        }
    if(tckn.length!=11){ //Burada almış olduğumuz tckn numarasının 11 haneli olduğunu sorguladık
        // Eğer almış olduğumuz tckn değeri 11 haneli değilse buradaki kodlar çalıştı
        console.log("Lütfen tckn numaranızı 11 haneli giriniz.")
        }
    else{ //Eğer if koşullarının hiçbiri sağlanmadıysa else içerisinde yazılan alert ve console.log kodları çalıştı.
        alert("İsim ve TCKN sorunsuz girildi.");
        console.log("İsim ve TCKN sorunsuz girildi.");
    }
}

