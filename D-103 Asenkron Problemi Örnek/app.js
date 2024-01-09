//? Asenkron Problemi Örneği

/* 
Bizler ilerleyen zamanlarda restApi gibi servisleri
kullanırken asenkron programlamada sıkıntılar yaşayabiliriz
bunu simule etmeye setTimeout kullanarak çalışacağız.
*/ 


const users = [
    {
        userId : 5,
        post : "Mutlu Post1"
    },
    {
        userId : 5,
        post : "Mutlu Post2"
    },
    {
        userId : 5,
        post : "Mutlu Post3"
    },
    {
        userId : 6,
        post : "Ceyda Post1"
    },
    {
        userId : 7,
        post : "Kubi Post1"
    }
]

function getUserId(){
    setTimeout(() => {
        //Servise gittik ve cevabı aldık
        return 5;
    }, 1000);
}


function getPostByUserId(userId){
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId==userId){
                console.log(user.post);
            }
        })
    }, 500);
}

let userId = getUserId();
getPostByUserId(userId);

/* Bu şekilde bir yapı oluşturduğumuzda 1 sn de userId
fonksiyonumuz çalıştığı için biz 500 ms de userId parametre
sini alamayız ve userId bizim için undefined olur.*/

//! Biz bu problemi asenkrondan senkron'a çevirme işlemleri
//! ile çözebiliriz. Bunun için ise:

//! CALLBACK - PROMISE - ASYNC&AWAIT YAPILARINI KULLANIYORUZ




