//? PROMISE NEDİR?-YAPISI VE KULLANIMI

/* Promise'ler callback'lerin alternatifi olarak
kullanılan yapılardır. Asenkron yapıları senkron'a
çevirmek için kullanılır.

Promise'lerin 
1-Pending : Bekleme
2-Resolve-Fulfilled : İşlem başarılı, veri alındı
3-Reject : Reddedildi, başarısız

Şeklinde 3 adet modu var ve istek atıldıktan sonra
eğer işlemimiz başarılı olursa resolve devreye girer
ve biz bu resolve'leri yakalamak için .then() kullanırız.
Eğer ki başarısız olursa reject olur ve biz bunları
yakalamak için ise .catch() kullanırız.

resolve == .then() ile yakalanır.
reject == .catch() ile yakalanır.
*/


// let check = true;

// const promise1 = new Promise((resolve,reject)=>{
//     if(check){
//         resolve("Promise Başarılı.");
//     }
//     else{
//         reject("Promise Başarısız.")
//     }    
// })

// console.log(promise1);

//-----------------------------------------------------//

// let check = true;

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Promise Başarılı")
//         }
//         else{
//             reject("Promise Başarısız")
//         }
//     })
// }


// createPromise()
// .then((a)=>{  //* Resolve yakalamak için kullanıyoruz.
//     console.log(a);
// })

// .catch((b)=>{ //* Reject yakalamak için kullanıyoruz.
//     console.log(b);
// })

// .finally((c)=>{  //* Finally resolve veya reject olsa da her zaman çalışır.
//     console.log("Her zaman çalışır");
// })



//! Örn: Promise'ler ile XMLHttpRequest'leri birlikte kullanalım

//!---- Burada Local'imizden bilgileri getirelim----//

// function readStudents(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState===4 && xhr.status===200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// readStudents("students.json")
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

//!---- Burada Server'dan bilgileri getirelim ----//

// function getUsers(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (error) {
//                 reject(error);
//             }
//         })
//         xhr.open("GET", url)
//         xhr.send();

//     })
// }

// function getCommentsByUserID(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (error) {
//                 reject(error);
//             }
//         })
//         xhr.open("GET", url)
//         xhr.send();

//     })
// }

// getUsers("https://jsonplaceholder.typicode.com/users/3")
//     .then((data) => {
//         console.log(data);

//         /* Burada aldığımız id datası ile başka bir than oluşturup
//         yakaladığımız id'nin comments'ine ulaşmış olduk yani iç içe
//         than yapıları kurmuş olduk. */
//         return getCommentsByUserID
//         (`https://jsonplaceholder.typicode.com/comments/${data.id}`)
        
        
//         //* Aldığımız data üzerinde dönüp isimleri de yakalayabiliriz.
//         // data.forEach((user)=>{
//         //     console.log(user.name);
//         // })
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Her zaman çalışır");
//     })


//! Promise.all()

/* Promise all() içerisine verdiğimiz promise'lerin hepsi
başarılı yani resolve ise .then'e giriyor, eğer içlerinden
bir tanesi bile başarısız yani reject ise .catch'e giriyor.
Then'e girerse her bir resolve'un değerini bize array olarak
geri döner, catch'e girerse hatalı olan promise'in mesajını
bize geri döner. */

const p1 = Promise.resolve("Birinci promise başarılı");
const p2 = Promise.resolve("İkinci promise başarılı");
const p3 = new Promise((resolve,reject)=>{
    resolve("Üçüncü promise başarılı");
});

const p4 = Promise.reject("Başarısız.");

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    for(let value of res){
        console.log(value);
    }
    // console.log(res);
})
.catch((err)=>{
    console.log(err);
})

