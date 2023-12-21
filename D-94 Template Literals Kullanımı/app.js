//? Template Literals Kullanımı

//* Stringleri birleştirmek için kullanabileceğimiz ES6
//* standartları ile birlikte gelen güzel bir özelliktir.

//! Template Literals'dan Önce

// function write (firstName,lastName){
//     console.log("İsim: " + firstName + " " + "Soyisim: " + lastName);
// }

// write("Mutlu","SENEM")

//! Template Literals Kullanarak

// function write(firstName,lastName){
//     console.log(`İsim: ${firstName} Soyisim: ${lastName}`);
// }

// write("Mutlu","SENEM")

//* Arrow function kullanarak;

// const temp = (firstName,lastName)=>{
//     console.log(`İsim: ${firstName} Soyisim: ${lastName}`);
// }

// temp("Mutlu","SENEM")


//! NOT: Template literals alt alta yazma, boşluk vs gibi her şeyi
//! algılıyor.

//* Bizler template literals'leri dinamik ve statik yazılışları
//* birlikte kullanacağımız zaman çok fazla kullanabiliyoruz. Örn;

function getUserByID(userID){
    console.log(`http://localhost:8080/users/${userID}`);
}

getUserByID(11);