//? Dinamik Olarak Element Oluşturmak (.createElement)


//Todo: Öncelikle sayfamızın en altında bulunan <a> etiketimizin yanına bir tane
//Todo: daha a etiketi eklemeye çalışalım.

// const link = document.createElement("a");

// link.id = "goYoutubeWebsite";
// link.className = "btn btn-dark btn-sm mt-3"
// link.href = "http://youtube.com";
// link.target = "_blank";
// link.innerHTML = "Go Youtube";

// console.log(link);

//* Bu şekilde oluşturacağımız <a> elementimizi hazırlamış olduk bu oluşturduğumuz
//* a elementini sayfaya dahil etmek için de dahil etmek istediğimiz parent'i seçip
//* .appendChild (append = eklemek,sonuna ilave etmek) methodu ile oluşturduğumuz 
//* elementimizi sonuna eklemiş oluyoruz.

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.appendChild(link);

// console.log(cardBody);

//Todo: Şimdi sayfamızın todo bölümüne bir Todo 5 eklemeye çalışalım.
//Todo: Aşağıda gördüğümüz html yapısını dinamik olarak oluşturmaya çalışacağız.

// <li class="list-group-item d-flex justify-content-between">Todo 3
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove"></i>
//     </a>
// </li>

const todoList = document.querySelector(".list-group"); //* Todo 5'imizi ekleyeceğimiz
//* todo listemizi seçtik.
const newTodo = document.createElement("li"); //* Ekleyeceğimiz li etiketini oluşturduk.
const newA = document.createElement("a"); //* li içerisindeki a etiketini oluşturduk.
const newI = document.createElement("i"); //* a içerisindeki i etiketini oluşturduk.

//* Oluşturduğumuz li etiketinin özelliklerini tanımladık.
newTodo.className = "list-group-item d-flex justify-content-between";
newTodo.innerHTML = "Todo 5";

//* Oluşturduğumuz a etiketinin özelliklerini tanımladık.
newA.href = "#";
newA.className = "delete-item";

//* Oluşturduğumuz i etiketinin özelliklerini tanımladık.
newI.className = "fa fa-remove";


//* Bu bölümde ise oluşturduğumuz etiketleri birbirlerinin içerisine yerleştirdik.
newA.appendChild(newI); //* i etiketimizi a etiketimizin içerisine yerleştirdik.
todoList.appendChild(newTodo); //* a etiketimizi li etiketimizin içerisine yerleştirdik.
newTodo.appendChild(newA); //* Son olarak oluşturduğumuz Todo 5' imizi todo listemize yerleştirdik.



