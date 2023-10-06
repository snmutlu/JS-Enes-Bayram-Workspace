//? Klavye Eventları

/*
1-keypress //* Sadece harf ve sayılarda tetiklenen bir eventtir.
2-keydown //* Klavye üzerindeki bütün tuşlara basıldığında tetiklenen
//* bir eventtir.
3-keyup //* Klavye üzerindeki bütün tuşlara basılıp tuştan elimizi
//* çektiğimizde tetiklenen bir eventtir.
*/

//! 1-keypress

// document.addEventListener("keypress",run);

// //* Burada kullanılan keypress sayesinde tuşa basıldığında sadece
// //* klavye üzerindeki harfleri ve rakamları yakalayabiliyoruz.

// function run(e){
//     console.log(e.key); //* Buradaki .key komutu klavye üzerinde
// //* basmış olduğumuz tuşu bize döner.
//     console.log(e.keyCode); //* Buradaki .keyCode komutu bastığımız
// //* tuşların ascii tablosundaki karşılıklarını bize döner.
//     console.log(e.which); //* .keyCode ile aynı işlevdedir
// }

//! 2-keydown

// document.addEventListener("keydown",run);

// //* Burada kullanılan keydown sayesinde tuşa basıldığında klavye
// //* üzerinde basılan harf, rakam, özel tuşlar vs hepsini yakalamış
// //* oluyoruz.

// function run(e){
//     console.log(e.key);
// }

//! 3-keyup

// document.addEventListener("keyup",run);

// //* Burada kullanılan keyup sayesinde bir tuşa bastığımızda ve elimizi
// //* bastığımız tuştan çektiğimizde event tetikleniyor. Keyup'da 
// //* keydown gibi basılan bütün tuşları algılıyor.

// function run(e){
//     console.log(e.key);
// }


//Todo: Klavyeden kullanıcı F5'e bastığında sayfayı yenilemesine
//Todo: engel olacağımız bir yapı oluşturalım.

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.keyCode); //* Burada kullanıcının basmış olduğu
//     //* tuşun keyCode' unu almış olduk.

//     e.preventDefault() //*preventDefault methodu ilgili elementin
//     //* tarayıcı tarafından o an yaptığı varsayılan işlemi
//     //* engellemeye yarar. prevent(engellemek,önlemek)
//     if(e.keyCode == 116){
//         //* Buradaki 116 sayısı F5 tuşunun keyCode karşılığıdır.
//     alert("Sayfa Yenileme Engellendi!");
//     }
// }

//Todo: Bir input'a girilen değerleri başka bir elementimizin
//Todo: textContent'ine aktarmaya çalışalım.

const cardTitle = document.querySelectorAll(".card-title")[0];

const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);

function run(e){
    cardTitle.textContent = e.target.value;

    //* Burada e.target.value özelliğini kullanıcının bastığı tuşu
    //* yakalayıp hedef elementimizin textContent'ine atamak için
    //* kullanıyoruz. target.value = hedef input içerisine girilen
    //* değer anlamına geliyor.
}