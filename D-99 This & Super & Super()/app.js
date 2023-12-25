//? This & Super & Super() Nedir?


//! This
/* Bu sınıfın içindeki demektir. Sınıf içerisindeki özellikleri vs
çağırabilmek için kullanırız. */

// class Person {
//     constructor(firstName){
//         this.firstName = firstName
//     }
//     write(){
//         console.log(this);
//     }
// }

// const person = new Person("Mutlu");

// person.write();


//! Super
/*Üst sınıfın içindeki demektir. Bir üst sınıfın içindeki özelliklere,
methodlara ulaşmakl için kullandığımız bir anahtar kelimedir.*/

// class Person1 {
//     firstName = "Mutlu";
//     write(){
//         console.log(this.firstName);
//     }
// }

// class Student1 extends Person1 {
//     write(){
//         super.write();
//     }
// }

// const student1 = new Student1();

// student1.write();

//! Super()
/* Miras almış olduğumuz sınıfın constructor'unu gösterir ve biz
tekrar tekrar this kullanmak zorunda kalmayız. 
super() methodu sayesinde almış olduğumuz bilgileri üst sınıfın
constructor'una göndermiş oluyoruz. Yani üst sınıfı beslemiş oluyoruz.*/

class Person2 {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    writeInfo(){
        console.log(this.firstName,this.lastName,this.salary);
    }
}

class Student2 extends Person2 {
    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }

    writeInfo2(){
        super.writeInfo();
    }
}

class Engineer extends Person2{
    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }
    writeInfo3(){
        super.writeInfo();
    }
}

const student = new Student2("Mutlu","SENEM",50000);
student.writeInfo2();

const engineer1 = new Engineer("Ceyda","ULU",20000);
engineer1.writeInfo3();