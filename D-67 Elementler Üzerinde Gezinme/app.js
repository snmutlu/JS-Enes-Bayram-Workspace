//? HTML Elementleri Üzerinde Gezinmek

const todo = document.querySelector(".list-group-item");

const todoList = document.querySelector(".list-group");

const card = document.querySelector(".card");


//! Anneden Çocuklara Erişmek (.children)

// let value;
// value = todoList; //* Annemiz olan todoList.
// value = todoList.children[0]; //* todoList'in çocuklarına erişmek için
// //* .children Propertys'ini kullanıyoruz.
// value = todoList.children[2];
// value = todoList.children[todoList.children.length-1]; //* Sondaki çocuğu 
// //* seçmiş olduk.
// value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children); //* todoList'imizin çocuklarını bir 
// //* array haline getirmiş olduk ve value değişkenine atadık.

// value.forEach(function(todo){
//     console.log(todo.textContent);
// });

//* Bu şekilde bir forEach döngüsü oluşturduk ve todoList'imizin çocukları
//* üzerinde dönüp her birinin textContent'ini console'a yazdırmış olduk.


//! Çocuktan Anneye Erişmek (.parentElement)

// value = todo;

// value = todo.parentElement; //* Burada .parentElement Propertys'i sayesinde
// //* todo'muzun parent'ine erişmiş oluyoruz.

// value = todo.parentElement.parentElement.parentElement; //* Biz bu
// //*.parentElement'leri çoğaltarak sürekli bir üst parent'a ulaşabiliriz.

// console.log(value);

//! Kardeşler Arasında Erişim (.nextElementSibling-.previousElementSibling)

// value = todo;

// value = todo.nextElementSibling; //* Burada .nextElementSibling Propertys'i
// //*sayesinde todo'muzun sibling'ine yani kardeşi olan elemente erişmiş olduk.

// //* Örneğin biz son todo elementini yakalayıp önceki sibling'ini de
// //* previousElementSibling propertys'i ile çağırabiliriz.

// const todoLastChild = document.querySelector(".list-group-item:last-child");

// value = todoLastChild;

// value = todoLastChild.previousElementSibling; //* Burada yakaladığımız last
// //* child'imizin bir önceki kardeşi olan elementi çağırmış oluyoruz.

// console.log(value);

//Todo: Örneğin biz h5 etiketli Todo Listesi textContentli etiketimizi parent'lerinden
//Todo: aşağıya doğru inerek yakalamaya çalışalım. Ve textContent'ini değiştirelim.

// const capture = document.querySelector(".container");

// value = capture.children[0].children[0].children[3].children[0]
// .textContent="Başlık Değişti";


// console.log(value);

//Todo: Örneğin Todo 3'e "row" class'lı div'den başlayarak ulaşmaya çalışalım ve değişik
//Todo: style özellikleri verelim.

const captureTodo3 = document.querySelector(".row");


const todo3 = captureTodo3.children[0].children[3].children[2].children[1].nextElementSibling;

const change = todo3;
change.textContent = "Ben değiştim!";
change.style.color = "purple";
change.style.backgroundColor = "lightgrey";
change.style.fontWeight = "bold";

console.log(todo3);

//* Burada Todo 3 textContent'imizin bulunduğu etiketi yakalayıp change değişkenimize
//* atamış olduk. Ve sonrasında .style özelliğini kullanarak css özelliklerini değiştirdik.

