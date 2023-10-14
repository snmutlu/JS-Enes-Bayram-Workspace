//* Tüm Elementleri Çağırmak

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos = [];

runEvents();
function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click",removeTodoToUI);
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });

}

function removeTodoToUI(e){
    if(e.target.className=="fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        showAlert("warning","Todo Başarıyla Silindi");
    }
}

function addTodo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        addInput.value = "";
        showAlert("danger", "Lütfen Bir Değer Giriniz");

    }
    else {
        // Arayüze ekleme
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("success", "Todo Başarıyla Eklendi");

    }
    // Storage'a ekleme
    e.preventDefault();
}

function addTodoToUI(newTodo) {

    // <li class="list-group-item d-flex justify-content-between">Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>
    // </li>
    // * Yukarıdaki yapıyı aşağıda oluşturuyoruz.


    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";


    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";


}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("keyTodos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("keyTodos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("keyTodos"));
    }
}

function showAlert(type, message) {

    //     <div class="alert alert-success" role="alert">
    //   This is a success alert—check it out!
    // </div>
    // * Yukarıdaki yapıyı aşağıda oluşturuyoruz.

    const div = document.createElement("div");
    // div.className="alert alert-"+type;
    //* Yukarıdaki kodun aynısı litirel template kullanım örneği
    div.className = `alert alert-${type}`;
    div.textContent = message;
    firstCardBody.appendChild(div);

    setTimeout(function () { //* Bu fonksiyon oluşturulan divi kaldırmak için kullanıldı
        div.remove();
    }, 1700) //* Buradaki virgülden sonraki değer timeout milisaniyesi.
}
