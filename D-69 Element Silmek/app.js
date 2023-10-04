//? Element Silmek


const todoList = document.querySelector(".list-group");

const todos = document.querySelectorAll(".list-group-item");

const todo3 = document.querySelectorAll(".list-group-item")[2];

//! .remove() Methodu kullanarak direk yakaladığımız element üzerinden silme işlemini
//! gerçekleştirebiliriz.

// todo3.remove();

//* Ayrıca sileceğimiz elementi bu şekilde de seçebiliriz.

// todos[0].remove();
// todos[1].remove();

// //* Burada yakaladığımız todos'larımızın 0. ve 1. indexindeki elementleri silmiş olduk.

// todos[todos.length-1].remove();

// //* Burada ise yakaladığımız todos'larımızın son elementini silmiş olduk.

/* ------------------------------------------------------------------------------ */

//! Parent içerisinden child seçerek element silmek.

// todoList.removeChild(/*Burada silmek istediğimiz elementi vermemiz gerekiyor*/todos[0]);

//* Yani yukarıdaki işlem şu olmuş oluyor;

// let secilenTodo = todos[0];
// console.log(secilenTodo);

// todoList.removeChild(secilenTodo);

//* Ayrıca biz sonuncu çocuğu seçip silme işlemi gibi işlemler de yapabiliriz.

todoList.removeChild(todoList.lastElementChild);

