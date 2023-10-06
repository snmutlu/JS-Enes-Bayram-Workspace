//? Mouse Eventleri

/*
1-DOMContentLoaded //* Sayfa yüklendiğinde event çalışır.
2-load //* Yine sayfa yüklendiğinde event çalışır fakat window objesi ile.
3-click //* Mouse ile seçilen elemente tıklandığında event çalışır.
4-dblclick //* Mouse ile seçilen elemente çift tıklandığında event çalışır.
5-mouseover //* Mouse'umuz seçtiğimiz elementin üzerine geldiğinde
//* event çalışır. Aynı zamanda seçtiğimiz elementin içerisindeki
//* elementler üzerinde dolaşıldığında da event çalışır.
6-mouseout //* Mouse'umuz seçtiğimiz elementin üzerinden çıktığında
//* event çalışır. Aynı zamanda seçtiğimiz elementin içerisindeki
//* elementlerin içinden çıkıldığında da event çalışır.
7-mouseenter //* Sadece seçtiğimiz elementin üzerine mouse geldiği
//* zaman event çalışır. İçerisindeki elementlerden etkilenmez.
8-mouseleave //* Sadece seçtiğimiz elementin üzerinden mouse çıktı
//* ğında event çalışır. İçerisindeki elementlerden etkilenmez.
 */

//! 1-DOMContentLoaded 

// document.addEventListener("DOMContentLoaded",run);

// function run(){
//     console.log("Sayfa Yüklendi");
// }

//! 2-load

// window.addEventListener("load",run);

// function run(){
//     console.log("Sayfa Yüklendi");
// }

//! 3-click

// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("click",run);

// function run(e){
//     console.log(e.type);
// }

//! 4-dblclick

// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("dblclick",run);

// function run(e){
//     console.log(e.type);
// }

//! 5-mouseover

// const cardTitle = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("mouseover",run);

// function run(e){
//     console.log(e.type);
// }

//! 6-mouseout

// const cardTitle = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("mouseout",run);

// function run(e){
//     console.log(e.type);
// }

//! 7-mouseenter

// const cardTitle = document.querySelectorAll(".card-body")[1];

// cardTitle.addEventListener("mouseenter",run);

// function run(e){
//     console.log(e.type);
// }

//! 7-mouseleave

const cardTitle = document.querySelectorAll(".card-body")[1];

cardTitle.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}