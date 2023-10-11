//? Events Kullanımları

//* Events'lerin farklı kullanımları mevcuttur. Örneğin html sayfası içerisinde
//* onclick="" şeklinde kullanabiliriz.
//* Örn: 

// onclick="document.querySelectorAll('.card-title')[1].textContent='Todo Başlığı Değişti'"


//* İkinci yöntemimiz onclick yapıldığında çağırılan bir methodu çalıştırmak.
//* Yani biz onclick verdiğimiz buton vs her neyse tıkladığımızda oluşturduğumuz
//* function içerisindeki kodlar çalışır.
//* Örn:
//* HTML Sayfasında element içerisinde: 
// onclick="changeTitle"
//* App.js sayfasında:
// function changeTitle(){
//     document.querySelectorAll(".card-title")[1].textContent="Başlık Değişti";
// }

//* Bir diğer ve en çok kullanılan yöntem ise addEventListener() methodu. 

const clearButton = document.querySelector("#todoClearButton");

// clearButton.addEventListener("click",function(){
//     document.querySelectorAll(".card-title")[1].textContent = "Todo Değiştirildi";
//     alert("Merhaba");
// });

//* En uygun kullanım ise şu şekilde.

clearButton.addEventListener("click",changeTitle2);

// function changeTitle2(){
//         document.querySelectorAll(".card-title")[1]
//         .textContent = "Todo Değiştirildi2";
// }

//* Ayrıca biz tetiklenen event'in parametresiyle bazı işlemler de yapabiliriz

function changeTitle2(e){
    console.log(e.type); //* Burada tetiklenen event'in tipini almış olduk.
    console.log(e.target); //* Burada tetiklenen event'in elementini çağırdık.
    console.log(e.target.textContent); //* Burada elementin textContent'ini yakaladık.
    console.log(e.target.className); //* Burada ise elementin classlarını yakaladık.
}





