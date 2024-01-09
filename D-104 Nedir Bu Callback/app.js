//? Callback Nedir?


// function getName(){
//     setTimeout(() => {
//     console.log("Mutlu");
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//     console.log("SENEM");
//     }, 500);
// }

// getName();

// getSurname();


/* Burada bir timeout kullandığımız için yukarıdaki
yapı asenkron olarak çalışacaktır ve sıra karışması olacaktır.
Biz bu asenkron problemlerini yönetebilmek için

1-Callback
2-Promise
3-Async&Await
*/

//! Callback : Bir fonksiyona parametre geçerek asenkron yapıyı
//! senkrona çeviririz. Örn;

// function getName(callback){
//     setTimeout(() => {
//     console.log("Mutlu");
//     callback();
//     }, 2000);
// }

// function getSurname(){
//     setTimeout(() => {
//     console.log("SENEM");
//     }, 2000);
// }

// getName(getSurname);

/* Burada getName adındaki function'umuza getSurname adındaki
function'umuzu parametre olarak vermiş oluyoruz. Ve bunu callback
olarak yakalayıp callback() olarak verdiğimiz function'da çağırıyoruz
Program başladıktan 2 saniye sonra getName adındaki function'umuz
çalışıyor o çalıştıktan 2 saniye sonra callback sayesinde 2. function
umuz çalışıyor. Ayrıca biz callback'leri parametre vererekte kullana
biliyoruz. Örn; */


// function getName(callback) {
//     setTimeout(() => {
//         let name = "Mutlu";
//         callback(name);
//     }, 1000);
// }


// function getSurname(name) {
//     setTimeout(() => {
//         let surName = "SENEM";
//         console.log(name, surName);
//     }, 1000);
// }

// getName(getSurname);

/* Bu şekilde 2 saniye sonrasında iki function'umuz da çalışıyor
Yani callback kullanmak için function'umuzun parametresine
çağıracağımız ikinci function'u parametre olarak veriyoruz.
Bu şekilde ilk 1. function'umuz çalışsın sonrasında 2. function'umuz
çalışsın diyerek asenkron bir yapıyı senkrona çevirmiş oluyoruz. */

//! Bizler direk bir function'u parametre olarak vermek yerine
//! boş bir function'u da parametre olarak verebiliriz.
//! Bunun için arrow function'ları kullanabiliriz. Örn;

function getName(callback) {
    setTimeout(() => {
        let isim = "Mutlu" //* Servisten ismi getirdik.
        callback(isim);
    }, 1000);
}

function getSurName(isim, callback) {
    setTimeout(() => {
        let soyisim = "SENEM"; //* İsme'e göre soyismi buldu.
        callback(soyisim);
    }, 2000);
}

function getAge(isim, soyisim, callback) {
    setTimeout(() => {
        let yas = 29; //* İsim ve soyisme göre servisten yaşı getirdi.
        callback(yas);
    }, 300);

}

getName((isim) => {
    getSurName(isim, (soyisim) => {

        getAge(isim, soyisim, (yas) => {
            console.log(isim, soyisim, yas);
        })

    })
})