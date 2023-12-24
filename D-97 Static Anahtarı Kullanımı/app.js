//? Static Nedir?

/*
Static bir anahtar kelimedir. Durağan, değişmeyen anlamındadır.
Bizler bazı değişkenlerimizi ve bazı methodlarımızı static olarak
tanımladığımızda nesne türetmeden direk class ismi üzerinden
methodlarımıza ve özelliklerimize erişebiliyoruz.

Bir şey static olarak tanımlanmazsa nesne türeterek erişilir.
Static olarak tanımlanırsa class üzerinden erişilir.
Çift yönlü bir erişim yoktur.
Static değilse nesneye özgüdür.
Static ise class'a özgüdür.
*/

class math {
    topla(a,b){
        console.log(a+b);
    }
    static cikar(a,b){
        console.log(a-b);
    }
    carp(a,b){
        console.log(a*b);
    }
    bol(a,b){
        console.log(a/b);
    }
}

const matematik = new math();

//! Burada static olarak tanımlamadığımız için topla methoduna
//! nesne üzerinden erişebiliyoruz.
matematik.topla(10,5)
matematik.carp(5,7)

// * //*matematik.cikar(11,5)
//! Biz burada cikar methodunda static anahtar kelimesini kullandığımız
//! için hata alıyoruz. Çünkü static kullandığımızda class ismi
//! üzerinden direk erişmemiz gerekiyor. 
//*Örn;
math.cikar(11,5)


//! Bir function veya özellik static ise class'a özgüdür
//! Değilse nesneye özgüdür!


//* Farklı bir örnek;

class Insan{
    static languagesCount=10;
    constructor(firstName,lastName,salary){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
    writeInfo(){
        console.log(this.firstName,this.lastName,this.salary,this.languagesCount);
    }
}

const insan1 = new Insan("Mutlu","SENEM",10000);
const insan2 = new Insan("Ceyda","ULU",15000)
insan1.writeInfo();
insan2.writeInfo();

/*Burada languagesCount özelliğimizi yazdırırken undefined hatası alırız.
Çünkü bu özelliği static olarak atadık ve nesne türeterek bu özelliği
çağıramıyoruz. Yani çift taraflı bir çalışma durumu söz konusu değil. */

//* Eğer biz languagesCount'u yazdırmak istiyorsak direk Insan sınıfını
//* kullanarak yazdırabiliriz. Örn;

console.log(Insan.languagesCount);