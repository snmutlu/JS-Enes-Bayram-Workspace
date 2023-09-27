//? DOM Seçiciler(Selectors) - Style Özellikleri

// Birşeyi yakalamak için 3 yöntem var 

// 1- İd 2-Classname 3-Tag Name(Etiket İsmi)

//! 1-getElementByID

// getElementById : İd'ye göre elementi yakalar.

const button = document.getElementById("todoAddButton");

// console.log(button);

// console.log(button.id);

// console.log(button.getAttribute("id"));

// console.log(button.className);

// console.log(button.getAttribute("class"));

// console.log(button.classList[3]);

// const classListesi = button.classList;

// classListesi.forEach(function(classNames){
//     console.log(classNames);
// })

// console.log(classListesi);


// let buttonText = button.textContent; // .textContent methodu string tipinde yazdırır.
// let buttonText2 = button.innerHTML; // .innerHTML methodu ile html kodlarını algılayacak şeklinde yazılarımızı yazdırmış oluruz.

// console.log(buttonText);
// console.log(buttonText2);

// button.textContent = "<b>Todo Ekleyin</b>";
// button.innerHTML = "<b>Todo Ekleyin</b>";


//! 2-getElementsByClassName

// getElementsByClassName : Class ismine göre elementi yakalar.

// const todoList = Array.from(document.getElementsByClassName("list-group-item"));

// todoList.forEach(function(todo){
//     console.log(todo);
// })

// console.log(todoList);







