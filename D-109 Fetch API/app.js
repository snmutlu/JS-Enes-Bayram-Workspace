//? Fetch API

/* Fetch API : Server'a istek atmak yani bir Http isteğinde
bulunmak için kullanmış olduğumuz window objesi
içerisinde bulunan bir methoddur. */

//! Local'imizde bulunan bir dosyadan veri alalım:

function getStudents(url) {
    fetch(url)
        .then((response) => response.json()) //* Tek satırda yazıldığı için return kullanılmıyor
        .then((data) => console.log(data))
/* Burada response tipinde bir cevapaldığımız için iki kere .than ile yakalıyoruz */
        .catch((err) => {
            console.log(`Hata: ${err}`);
        })
}

getStudents("students.json")


//! Online bir Rest API'dan veri alalım:

function getData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}

getData("https://jsonplaceholder.typicode.com/users")