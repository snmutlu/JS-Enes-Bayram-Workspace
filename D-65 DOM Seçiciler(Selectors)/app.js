//? DOM Seçiciler(Selectors) - Style Özellikleri

// Birşeyi yakalamak için 3 yöntem var 

//! 1- İd 2-Classname 3-Tag Name(Etiket İsmi) 

//! 4-querySelector 5-querySelectorAll

//-----------------------------------------------------------//

//! 1-getElementByID

// getElementById : İd'ye göre elementi yakalar.

// const button = document.getElementById("todoAddButton");

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
// let buttonText2 = button.innerHTML; // .innerHTML methodu ile html kodlarını
// algılayacak şeklinde yazılarımızı yazdırmış oluruz.

// console.log(buttonText);
// console.log(buttonText2);

// button.textContent = "<b>Todo Ekleyin</b>";
// button.innerHTML = "<b>Todo Ekleyin</b>";


//! 2-getElementsByClassName

// getElementsByClassName : Class ismine göre elementi yakalar.

// const list = document.getElementsByClassName("list-group-item")[2];
// console.log(list);

// Burada bütün list-group-item class'lı elementleri yakaladığımız için biz özel
// olarak yakalamak istediğimiz elementin index numarasını verebiliriz.



// const todoList = Array.from(document.getElementsByClassName("list-group-item"));

// todoList.forEach(function(todo){
//     console.log(todo);
// })

// console.log(todoList);

//! 3-getElementsByTagName

// getElementsByTagName : Etiket ismine göre elementi yakalar.

// const forms = Array.from(document.getElementsByTagName("form"));

// forms.forEach(function(forms1){
//     console.log(forms1);
// });

// console.log(forms[0].id);

//! 4-querySelector

// querySelector : Css seçicilerini kullanarak istediğimiz seçimi yapmayı sağlar.
// İd, Class ve TagName'e göre seçim yapabiliriz.

//*Id Kullanarak Seçim

// const clearButton = document.querySelector("#todoClearButton");
// Burada # seçicisini kullanarak id ile seçmiş olduk. Bunu getElementById ile de yapabilirdik.

// console.log(clearButton);

//*Class Kullanarak Seçim

// const todoList = document.querySelector(".list-group");

// console.log(todoList);

//! 5-querySelectorAll

// querySelectorAll : //! Eğer birden fazla yerde kullanılmış class varsa ve biz
//! bunların hepsini yakalamak istersek querySelectorAll kullanmamız gerekir.

// const todo2 = document.querySelectorAll(".list-group-item");
// console.log(todo2);

// Bu şekilde bütün list-group-item class'ı içerenleri yakalamış olduk.

//* TagName Kullanarak Seçim

// const todo3 = document.querySelectorAll("li:nth-child(3)");
// Biz bu methodla birlikte Css selectorlarını kullanabildiğimiz için first-child,
// last-child, nth-child(), odd,even gibi seçenekleri kullanabiliriz

// console.log(todo3);


// Odd ve Even Örnek;

// const todoList1 = Array.from(document.querySelectorAll("li:nth-child(odd)"));

// todoList1.forEach(function(todo){
//     todo.style.backgroundColor = "lightgreen";
// })

// console.log(todoList1);

// const todoList2 = Array.from(document.querySelectorAll("li:nth-child(even)"));

// todoList2.forEach(function(todo2){
//     todo2.style.backgroundColor = "lightgrey";
// })
// console.log(todoList2);

// Burada odd ve even selectorleri sayesinde tek sayıları ve çift sayıları seçip istediğimiz gibi renklendirme yapabilmiş olduk.