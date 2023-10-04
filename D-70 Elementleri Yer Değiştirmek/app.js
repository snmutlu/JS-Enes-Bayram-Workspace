//? Elementleri Değiştirmek

//! .replaceChild (replace = yer değiştirmek)

//* Öncelikle değiştireceğimiz elementimizin parentini yakalıyoruz.

const cardBody = document.querySelectorAll(".card-body")[1];

//* Sonrasında değiştireceğimiz elementimizi yakalıyoruz.

const oldTitle = document.getElementsByTagName("h5")[1];

//* Sonrasında yeni elementimizi oluşturuyoruz ve özelliklerini veriyoruz.

const newTitle = document.createElement("h2");
newTitle.textContent = "Todo Listesi - Yeni";
newTitle.className = "card-title";

//* Sonrasında .replaceChild methodu ile değişim işlemini yapıyoruz.
//* .replaceChild methodunda parametre olarak öncelikle yeni oluşturduğumuz 
//* elementimizi veriyoruz, sonrasında node tipinde değiştireceğimiz 
//* elementimizi parametre olarak veriyoruz.

// cardBody.replaceChild(newTitle,oldTitle);

//* Ayrıca bu işlemi değiştireceğimiz elementi yakalamaya gerek duymadan
//* childNodes propertys'i ile de  yapabiliriz.

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);



