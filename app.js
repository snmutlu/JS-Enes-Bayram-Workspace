//? Style Özelliği Kullanımı

// Style objesi içerisinde yüzlerce özellik mevcut. W3Schools style properties'den bu özelliklere ulaşabiliriz.

// Örn;

// const list = document.querySelectorAll(".list-group-item")[0];

// console.log(list);

// list.style.color = "#fff";
// list.style.backgroundColor = "purple";
// list.style.fontWeight = "bold";
// list.style.paddingTop = "20px";
// list.style.paddingLeft = "70px";


// const list2 = document.querySelector(".list-group");

// console.log(list2);

// list2.style.marginTop = "60px";
// list2.style.marginLeft = "100px";
// list2.style.marginBottom = "60px";


const clearButton = document.querySelector("#todoClearButton");

console.log(clearButton);

clearButton.style.backgroundColor = "lightgrey";

clearButton.style.fontWeight = "bold";

clearButton.style.padding = "20px";

clearButton.style.borderRadius = "30px";


/* Yani bizler her bir html elementimizin içerisinde bulunan stlye
objesinin içerisindeki bu özellikleri kullanarak dinamik olarak ekrandaki elementlerimize özellikler kazandırabiliriz. */