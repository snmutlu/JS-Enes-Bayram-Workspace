//? Input Events

/*
1-focus //* Bir input içerisine tıklanıldığında tetiklenen eventtir.
2-blur //* Bir input içerisinden fare çıkarılıp tıklandığında tetiklenen eventtir.
3-copy //* Input içerisindeki bir yazı kopyalantığında tetiklenen eventtir.
4-paste //* Input içerisindeki bir yazı yapıştırıldığında tetiklenen eventtir.
5-cut //* Input içerisindeki bir yazı kesildiğinde tetiklenen eventtir.
6-select //* Input içerisindeki bir yazı seçildiğinde tetiklenen eventtir.
*/

const todo = document.querySelector("#todoName");

function run(e){
    console.log(e.type);
}


//! 1-focus

todo.addEventListener("focus",run);

//! 2-blur

todo.addEventListener("blur",run);

//! 3-copy

todo.addEventListener("copy",run);

//! 4-paste

todo.addEventListener("paste",run);

//! 5-cut

todo.addEventListener("cut",run);

//! 6-select

todo.addEventListener("select",run);