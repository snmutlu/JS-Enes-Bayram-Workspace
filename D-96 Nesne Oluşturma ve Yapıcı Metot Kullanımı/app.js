//? OOP GIRIS

class Insan { //* Sınıf

    /* Bir sınıf içerisinde
    1- Özellikler
    2- Yapıcı Method
    3- Function
    */

    constructor(isim,soyisim,maas,yas){ // *Yapıcı Method

    //* Aldığımız parametreleri burada this ile değişkenlere atıyoruz.
        this.name = isim
        this.surname = soyisim
        this.salary = maas
        this.age = yas
    }

    bilgileriYazdir(){
        console.log(`
        İsim: ${this.name} Soyisim: ${this.surname}
        Maas: ${this.salary} Yas: ${this.age}`);
    }
}

//* Nesne oluşturmak

const insan1 = new Insan("Mutlu","SENEM",50000,29);
const insan2 = new Insan("Ceyda","ULU",50000,27);

//*Burada yüzlerce insan oluşturabilir ve özelliklerini kullanabiliriz.

insan1.bilgileriYazdir();
insan2.bilgileriYazdir();

console.log(insan1.name);
/*
Öncelikle Insan adında bir sınıf oluşturduk ve bu oluşturduğumuz
sınıfı insan1 adında bir değişkene setledik. Sınıf içerisinde
bir yapıcı method (constructor) oluşturduk ve aldığımız parametreleri
bu constructor içerisinde değişkenlere atadık. Sonrasında bu bilgileri
yazdıracağımız bir function oluşturduk. Bu şekilde farklı işler yapan
birden çok function oluşturabiliriz. Çağırdığımız function'da hangi
nesne özelliklerini tanımlarsak o nesnenin özelliklerini görürüz.
*/