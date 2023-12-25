//? Inheritance (Miras Alma) Nedir?

/* Kalıtım, Miras alma anlamındadır. 
Bir sınıfı miras aldığınızda özelliklerini ve methodlarını miras
almış oluruz.*/

class Person {
    firstName = "Mutlu";

    write(){
        console.log("Person write:",this.firstName);
    }
}

class Student extends Person{
//* Burada extends anahtar kelimesinden sonra miras alacağımız class'ı
//* Yani Person sınıfını veriyoruz ve özellikleri buradan almış oluyoruz
write1(){
    console.log("Student write:",this.firstName);
    //* This dediğimizde bu sınfın içindeki demiş oluyoruz.
    super.write();
    //* super dediğimizde üst sınıfın (Person) içindeki demiş oluyoruz.
}
}
const student1 = new Student();
student1.write1();

// const person = new Person();
// person.write();
