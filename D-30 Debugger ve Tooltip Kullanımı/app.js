//? Breakpoint Ve Tooltip Nedir?

/*
Tooltip: Tooltipleri açıklama satırları olarak düşünebiliriz.
Örnek vermek gerekirse methodları yazarken yanlarında çıkan
kutucuklarda yazan bilgilendirici açıklama satırlarıdır.
*/

/*
Breakpoint: Biz yazdığımız kodları belirli yerlerden başlatmak istersek veya
adım adım çalıştırmak istersek breakpointleri kullanabiliriz. Bu sayede derleyici bütün kodları çalıştırmayacaktır ve biz istediğimiz yerden kodlarımızı çalıştırabileceğiz.
 */

// Örn:


let a = 10;
let b = 15;
debugger;
let c = a+b;
let d = a+b+c;
let e = a+b+c+d;

let sonuc = e;
console.log(sonuc);

/*Biz breakpointlerimiz debugger; kullanarak oluşturuyoruz. Debugger'leri istediğimiz yerde konumlandırabiliyoruz. Ve kodlarımız debuggerleri konumlandırdığımız satırlardan başlıyor. */