//? Async Await

/* Async Await yapısı bizi promise-then zincirinden
kurtaran bir yapıdır. */

// Promise-Than Ziniciri: 

// .then(){
//     .then(){
//         .then(){
//             console.log();
//         }
//     }
// }


// async function hello(){
//     return "Hello World";
// }

// console.log(hello()); 

//* Burada hello() üzerine geldiğimizde geriye 
//* bir promise veri tipinde değer döndüğünü görürüz.

/* Asyn keyword'ü ile işaretlenmiş function'lar geriye
bir promise tipinde değer döndürürler. */

//* Bizler dönen bu değeri handle edebilmek için .then kullanabiliriz.

// hello()
// .then((res)=>{
//     console.log(res);
// })


//! Async Await yapısı kullanılmadan .then'ler ile aşağıdaki şekilde karmaşık
//! kod yapıları oluşuyor:

// document.querySelector("#button").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>response.json())
//     .then((post)=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response)=>response.json())
//         .then((comments)=> console.log(comments))
//     })
// })


//! Async Await ile bu karmaşıklığın önüne geçmiş oluyoruz:

/* 
!Asenkron çalışan herhangi bir isteği bizim await ile beklememiz gerekiyor.
Çünkü bizim istek yolladığımız fetch api' ımız dan bize cevap ve veri
dönene kadar bizim diğer kodlarımızın çalışmaması gerekiyor. Bunun için
await anahtar kelimesini kullanıyoruz. //! Ayrıca await kullanılan her fonksiyonun
! başına da async anahtar kelimesi yazmak zorundayız.
*/

// document.querySelector("#button").addEventListener("click",async()=>{
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const post = await responsePost.json();
//     const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
//     const comments = await responseComments.json();
//     console.log(comments);
// })

/* Await kullanılan satırlardaki kodların işlemleri tamamlanmadan bir alt
satırdaki kodlar çalışmıyor. Yani await bekletme görevi görüyor. */

//! Yukarıdaki yapıyı daha da kısaltabiliriz:

document.querySelector("#button").addEventListener("click",async()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await(await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(comments);
})

